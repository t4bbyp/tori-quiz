import { questions } from "../assets/questions";

export function characterBuilder(characterAnswers) {
  const traits = {};
  const preferences = {};

  for (const question of questions) {

    const savedAnswer = characterAnswers.find(
      (a) => a.questionId === question.id
    )

    const selectedAnswerId = savedAnswer?.answerId;

    const answer = question.answers.find(
      (a) => a.id === selectedAnswerId
    );

    if (!answer) continue;

    if (answer.tags) {
      for (const tag in answer.tags) {
        traits[tag] = (traits[tag] || 0) + answer.tags[tag];
      }
    }

    if (answer.meta) {
      for (const key in answer.meta) {
        preferences[key] = answer.meta[key];
      }
    }
  }

  return {
    traits,
    preferences,
  };
}