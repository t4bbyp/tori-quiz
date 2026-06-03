import { questions } from "../assets/questions";
import { cosineSimilarity, applyWeights } from "../utils/personalities";

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

function isGenderCompatible(userMeta, character) {
  const userGender = userMeta.gender;
  const userSexuality = userMeta.sexuality;

  const charGender = character.preferences.gender;
  const charSexuality = character.preferences.sexuality;

  const userLikesChara =
    userSexuality === "bi" || userSexuality === "asexual" ||
    (userSexuality === "hetero" && userGender !== charGender) ||
    (userSexuality === "homo" && userGender === charGender);

  const charaLikesUser =
    charSexuality === "bi" || charSexuality === "asexual" ||
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

export function calculateScore(character, userMeta, userDimensions) {
  const meta = metaScore(userMeta, character);
  if (meta < 0) return -1;

  const charDims = applyWeights(character.traits);
  const userDims = applyWeights(userDimensions);

  const traitScore = cosineSimilarity(userDims, charDims);

  return meta * 0.3 + traitScore * 0.7;
}

export function normalizeTo01(traits, traitMax) {
  const out = {};
  for (const t in traits) {
    out[t] = (traits[t] || 0) / (traitMax[t] || 1);
  }
  return out;
}
