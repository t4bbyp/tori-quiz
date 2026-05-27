export default function buildCharacterTags(traits, preferences, dimensions, t) {
  const tags = [];

  switch (preferences.gender) {
    case "masculino":
      tags.push(t(($) => $.tags.gender.masc));
      break;
    case "femenino":
      tags.push(t(($) => $.tags.gender.fem));
      break;
    default:
      tags.push(t(($) => $.tags.gender.other));
  }

  switch (preferences.sexuality) {
    case "hetero":
      tags.push(t(($) => $.tags.sexuality.hetero));
      break;
    case "homo":
      tags.push("Gay");
      break;
    case "bi":
      tags.push("Bi/Pan");
      break;
    default:
      tags.push("Asexual");
  }

  switch (preferences.apego) {
    case "seguro":
      tags.push(t(($) => $.tags.attachment.seguro));
      break;
    case "evitativo":
      tags.push(t(($) => $.tags.attachment.evitativo));
      break;
    case "ansioso":
      tags.push(t(($) => $.tags.attachment.ansioso));
      break;
    case "desorganizado":
      tags.push(t(($) => $.tags.attachment.desorganizado));
      break;
    default:
      tags.push(t(($) => $.tags.attachment.no));
  }

  switch(preferences.tipo) {
    case "dom":
        tags.push("Dom");
        break;
    case "sub":
        tags.push("Sub");
        break;
    default:
        tags.push("Switch");
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

  if (max === ambi) return t(($) => $.tags.social.ambi);
  if (max === intro) return t(($) => $.tags.social.intro);
  return t(($) => $.tags.social.extro);
}

function getLoveStyleTag(traits, t) {
  const romantic = traits.romantico || 0;
  const pragmatic = traits.pragmatico || 0;

  return romantic >= pragmatic
    ? t(($) => $.tags.love_type.romantico)
    : t(($) => $.tags.love_type.pragmatico);
}

function getMentalStyleTag(dimensions, t) {
  const emotional = dimensions.emotional;
  const rational = dimensions.rational;

  return emotional >= rational
    ? t(($) => $.tags.mental.emotional)
    : t(($) => $.tags.mental.rational);
}
