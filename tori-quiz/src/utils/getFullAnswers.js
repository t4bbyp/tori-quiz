import { questions } from "../assets/questions";

export function getFullAnswers(savedAnswers) {
  return savedAnswers.map((saved) => {
    const question = questions.find(
      (q) => q.id === saved.questionId
    );

    const answer = question.answers.find(
      (a) => a.id === saved.answerId
    );

    return answer;
  });
}