import { createHashRouter, RouterProvider } from "react-router-dom";
import QuizPage from "./pages/quiz";
import NewCharacterPage from "./pages/newCharacter";
import EditCharacterPage from "./pages/editCharacter";

const router = createHashRouter([
  {
    path: "/",
    element: <QuizPage />,
  },
  {
    path: "/new",
    element: <NewCharacterPage />,
  },
  {
    path: '/edit/:id',
    element: <EditCharacterPage/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
