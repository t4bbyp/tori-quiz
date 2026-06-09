export const DIMENSIONS = {
  emotional: ["emocional", "empatico", "expresivo", "evitativo", "romantico"],
  rational: ["racional", "pragmatico", "resolutivo", "directo", "inteligente"],
  social: ["extrovertido", "introvertido", "ambivertido", "contacto_fisico", "educado", "hater"],
  stability: ["estable", "caotico", "procrastinador", "estricto", "adaptable"],
  openness: ["ambiguo", "aventurero", "sutil", "casual"],
};

export const DIMENSION_WEIGHTS = {
  emotional: 1.3,
  rational: 1.0,
  social: 1.1,
  stability: 1.0,
  openness: 1.2,
  attachment: 1.4,
};

export function applyWeights(dimensions) {
  const weighted = {};

  for (const dim in dimensions) {
    weighted[dim] = dimensions[dim] * (DIMENSION_WEIGHTS[dim] || 1);
  }

  return weighted;
}

export function toDimensions(traits) {
  const result = {};

  for (const dim in DIMENSIONS) {
    let sum = 0;
    let count = 0;

    for (const trait of DIMENSIONS[dim]) {
      sum += traits[trait] || 0;
      count++;
    }

    result[dim] = sum / DIMENSIONS[dim].length;
  }

  return result;
}

export function cosineSimilarity(a, b) {
  let dot = 0;
  let magA = 0;
  let magB = 0;

  for (const dim in a) {
    const va = a[dim] || 0;
    const vb = b[dim] || 0;

    dot += va * vb;
    magA += va * va;
    magB += vb * vb;
  }

  return dot / (Math.sqrt(magA) * Math.sqrt(magB) || 1);
}

export function euclideanSimilarity(a, b) {
  let sumSquares = 0;
  const allKeys = new Set([...Object.keys(a), ...Object.keys(b)]);

  for (const dim of allKeys) {
    const va = a[dim] || 0;
    const vb = b[dim] || 0;
    sumSquares += (va - vb) ** 2;
  }

  const distance = Math.sqrt(sumSquares);
  const maxDistance = Math.sqrt(allKeys.size);
  return 1 - distance / maxDistance;

}