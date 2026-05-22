import { createHashRouter, RouterProvider } from "react-router-dom";
import QuizPage from "./pages/quiz";
import NewCharacterPage, {
  action as newSessionAction,
} from "./pages/newCharacter";
import EditCharacterPage, {action as editSessionAction} from "./pages/editCharacter";
import StartPage from "./pages/start";
import { useEffect } from "react";
import { supabase } from "./utils/supabase";


const router = createHashRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
  {
    path: "/new",
    element: <NewCharacterPage />,
    action: newSessionAction,
  },
  {
    path: "/edit/:id",
    element: <EditCharacterPage />,
    action: editSessionAction
  },
]);

async function checkSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return;
  }

  const loginTime = localStorage.getItem("loginTime");

  if (!loginTime) {
    await supabase.auth.signOut();
    return;
  }

  const now = Date.now();
  const maxDuration = 1000 * 60 * 60;

  if (now - Number(loginTime) > maxDuration) {
    await supabase.auth.signOut();
    localStorage.removeItem("loginTime");
    return;
  }
}

function App() {
  useEffect(() => {
    checkSession();

    const interval = setInterval(checkSession, 60000);

    return () => clearInterval(interval);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
