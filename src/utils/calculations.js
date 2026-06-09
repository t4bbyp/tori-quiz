import { euclideanSimilarity, applyWeights } from "../utils/personalities";

export function computeTraitMax(questions) {
  const max = {};

  for (const q of questions) {
    const traitInQuestion = {};

    for (const a of q.answers) {
      if (!a.tags) continue;

      for (const trait in a.tags) {
        const value = a.tags[trait];

        if (value > (traitInQuestion[trait] || 0)) {
          traitInQuestion[trait] = value;
          //max[trait] = (max[trait] || 0) + value;
        }
      }
    }

    for (const trait in traitInQuestion) {
      max[trait] = (max[trait] || 0) + traitInQuestion[trait];
    }
  }

  return max;
}

function isGenderCompatible(userMeta, character) {
  const userGender = userMeta.gender;
  const userSexuality = userMeta.sexuality;

  const charGender = character.preferences.gender;
  const charSexuality = character.preferences.sexuality;

  const userLikesChara =
    userSexuality === "bi" ||
    userSexuality === "asexual" ||
    (userSexuality === "hetero" && userGender !== charGender) ||
    (userSexuality === "homo" && userGender === charGender);

  const charaLikesUser =
    charSexuality === "bi" ||
    charSexuality === "asexual" ||
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
  if (userMeta.libido === character.preferences.libido) score += 1;
  if (userMeta.lenguaje === character.preferences.lenguaje) score += 1;

  return score / 6;
}

export function calculateScore(character, userMeta, userDimensions) {
  const meta = metaScore(userMeta, character);
  if (meta < 0) return -1;

  const charDims = applyWeights(character.traits);
  const userDims = applyWeights(userDimensions);

  const traitScore = euclideanSimilarity(userDims, charDims);

  return meta * 0.3 + traitScore * 0.7;
}

export function normalizeTo01(traits, traitMax) {
  const out = {};
  for (const t in traits) {
    out[t] = (traits[t] || 0) / (traitMax[t] || 1);
  }
  return out;
}
