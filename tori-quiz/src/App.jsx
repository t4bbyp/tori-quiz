import { createHashRouter, RouterProvider } from "react-router-dom";
import QuizPage from "./pages/quiz";
import NewCharacterPage from "./pages/newCharacter";

const router = createHashRouter([
  {
    path: "/",
    element: <QuizPage />,
  },
  {
    path: "/new",
    element: <NewCharacterPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
