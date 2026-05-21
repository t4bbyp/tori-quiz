import { questions } from "../assets/questions";

export function computeTraitMax(question) {
  const max = {};

  for (const q of questions) {
    for (const a of q.answers) {
      if (!a.tags) continue;

      for (const trait in a.tags) {
        const value = a.tags[trait];
        if (value > 0) {
          max[trait] = (max[trait] || 0) + value;
        }
      }
    }
  }

  return max;
}

export function normalizeUserTraits(rawTraits, traitMax) {
  const normalized = {};

  for (const trait in rawTraits) {
    const max = traitMax[trait] || 1;
    normalized[trait] = rawTraits[trait] / max;
  }

  return normalized;
}

export function normalizeCharacterTraits(rawTraits, traitMax) {
  const normalized = {};

  for (const trait in traitMax) {
    const max = traitMax[trait] || 1;
    normalized[trait] = (rawTraits?.[trait] || 0) / max;
  }

  return normalized;
}

function traitSimilarity(user, character) {
  const traits = Object.keys(user);

  let sum = 0;
  let count = 0;

  const userAdapt = user.adaptable || 0;
  const charAdapt = character.adaptable || 0;

  const adaptability = (userAdapt + charAdapt) / 20;
  // normalizado 0–1 aprox

  for (const trait of traits) {
    if (trait === "adaptable") continue;

    const u = user[trait] || 0;
    const c = character[trait] || 0;

    const diff = Math.abs(u - c);

    // 👇 aquí está la magia
    const adjustedDiff = diff * (1 - adaptability * 0.5);

    sum += 1 - Math.min(1, adjustedDiff);
    count++;
  }

  return count ? sum / count : 0;
}

function isGenderCompatible(userMeta, character) {
  const userGender = userMeta.gender;
  const userSexuality = userMeta.sexuality;

  const charGender = character.preferences.gender;
  const charSexuality = character.preferences.sexuality;

  const userLikesChara =
    userSexuality === "bi" ||
    (userSexuality === "hetero" && userGender !== charGender) ||
    (userSexuality === "homo" && userGender === charGender);

  const charaLikesUser =
    charSexuality === "bi" ||
    (charSexuality === "hetero" && charGender !== userGender) ||
    (charSexuality === "homo" && charGender === userGender);

  return userLikesChara && charaLikesUser;
}

function metaScore(userMeta, character) {
  let score = 0;

  if (!isGenderCompatible(userMeta, character)) return -1;

  if (userMeta.tipo === character.preferences.quiere_tipo) score += 1;
  if (userMeta.apego === character.preferences.quiere_apego) score += 1;
  if (userMeta.child === character.preferences.child) score += 1;
  if (userMeta.relacion === character.preferences.relacion) score += 1;

  return score / 4;
}

export function calculateScore(character, userMeta, userTraits) {
  //META
  const meta = metaScore(userMeta, character);

  if (meta < 0) return -1;

  let traitSum = 0;
  let traitCount = 0;

  for (const trait in userTraits) {
    const userValue = userTraits[trait] || 0;
    const characterValue = character.traits?.[trait] || 0;

    traitSum += traitSimilarity(userValue, characterValue);
    traitCount++;
  }

  const traitScore = traitCount ? traitSum / traitCount : 0;

  return meta * 0.4 + traitScore * 0.6;
}
