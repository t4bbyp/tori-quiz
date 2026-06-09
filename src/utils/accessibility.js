export default function handleKeyDown(e, answers, currentIndex, setFocusedIndex, onSelect) {
  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    e.preventDefault();
    const nextIndex = (currentIndex + 1) % answers.length;
    setFocusedIndex(nextIndex);
    e.currentTarget.parentElement.parentElement
      .children[nextIndex].querySelector("button").focus();
  }

  if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    e.preventDefault();
    const prevIndex = (currentIndex - 1 + answers.length) % answers.length;
    setFocusedIndex(prevIndex);
    e.currentTarget.parentElement.parentElement
      .children[prevIndex].querySelector("button").focus();
  }

  if (e.key === "Enter") {
    e.preventDefault();
    onSelect(answers[currentIndex].id);
  }
}