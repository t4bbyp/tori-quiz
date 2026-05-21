import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizPage from "./pages/quiz";
import NewCharacterPage from "./pages/newCharacter";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <QuizPage />,
    },
    {
      path: "/new",
      element: <NewCharacterPage />,
    },
  ],
  {
    basename: "/tori-quiz",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
