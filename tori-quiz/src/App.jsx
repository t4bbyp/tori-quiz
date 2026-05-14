import { useState } from "react";
import Landing from "./components/Landing";
import { QuizProvider } from "./store/quizContex";

function App() {
  const [name, setName] = useState("");

  return (
    <QuizProvider>
      <Landing/>
    </QuizProvider>
  );
}

export default App;
