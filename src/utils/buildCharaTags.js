export default function buildCharacterTags(traits, preferences, dimensions, t) {
  const tags = [];

  switch (preferences.gender) {
    case "masculino":
      tags.push({ label: t(($) => $.tags.gender.masc), category: "gender" });
      break;
    case "femenino":
      tags.push({ label: t(($) => $.tags.gender.fem), category: "gender" });
      break;
    default:
      tags.push({ label: t(($) => $.tags.gender.other), category: "gender" });
  }

  switch (preferences.sexuality) {
    case "hetero":
      tags.push({
        label: t(($) => $.tags.sexuality.hetero),
        category: "sexuality",
      });
      break;
    case "homo":
      tags.push({ label: "Gay", category: "sexuality" });
      break;
    case "bi":
      tags.push({ label: "Bi/Pan", category: "sexuality" });
      break;
    default:
      tags.push({ label: "Asexual", category: "sexuality" });
  }

  switch (preferences.apego) {
    case "seguro":
      tags.push({
        label: t(($) => $.tags.attachment.seguro),
        category: "attachment",
      });
      break;
    case "evitativo":
      tags.push({
        label: t(($) => $.tags.attachment.evitativo),
        category: "attachment",
      });
      break;
    case "ansioso":
      tags.push({
        label: t(($) => $.tags.attachment.ansioso),
        category: "attachment",
      });
      break;
    case "desorganizado":
      tags.push({
        label: t(($) => $.tags.attachment.desorganizado),
        category: "attachment",
      });
      break;
    default:
      tags.push({
        label: t(($) => $.tags.attachment.no),
        category: "attachment",
      });
  }

  switch (preferences.tipo) {
    case "dom":
      tags.push({ label: "Dom", category: "type" });
      break;
    case "sub":
      tags.push({ label: "Sub", category: "type" });
      break;
    default:
      tags.push({ label: "Switch", category: "type" });
  }

  tags.push(getSocialTag(traits, t));
  tags.push(getLoveStyleTag(traits, t));
  tags.push(getMentalStyleTag(dimensions, t));

  return tags;
}

function getSocialTag(traits, t) {
  const intro = traits.introvertido || 0;
  const extro = traits.extrovertido || 0;
  const ambi = traits.ambivertido || 0;

  const max = Math.max(intro, extro, ambi);

  if (max === ambi)
    return { label: t(($) => $.tags.social.ambi), category: "social" };
  if (max === intro)
    return { label: t(($) => $.tags.social.intro), category: "social" };
  return { label: t(($) => $.tags.social.extro), category: "social" };
}

function getLoveStyleTag(traits, t) {
  const romantic = traits.romantico || 0;
  const pragmatic = traits.pragmatico || 0;

  return romantic >= pragmatic
    ? { label: t(($) => $.tags.love_type.romantico), category: "love_type" }
    : { label: t(($) => $.tags.love_type.pragmatico), category: "love_type" };
}

function getMentalStyleTag(dimensions, t) {
  const emotional = dimensions.emotional;
  const rational = dimensions.rational;

  return emotional >= rational
    ? { label: t(($) => $.tags.mental.emotional), category: "mental" }
    : { label: t(($) => $.tags.mental.rational), category: "mental" };
}
