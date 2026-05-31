import { createHashRouter, RouterProvider } from "react-router-dom";
import QuizPage from "./pages/quiz";
import NewCharacterPage, {
  action as newSessionAction,
} from "./pages/newCharacter";
import EditCharacterPage, {
  action as editSessionAction,
} from "./pages/editCharacter";
import HomePage from "./pages/home";
import { useEffect } from "react";
import { supabase } from "./utils/supabase";
import CharactersListPage from "./pages/charactersList";
import RootLayout from "./pages/rootLayout";
import FaqPage from "./pages/faq";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
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
        path: "/edit",
        element: <EditCharacterPage />,
        action: editSessionAction,
      },
      {
        path: "/edit/:id",
        element: <EditCharacterPage />,
      },
      {
        path: "/characters-list",
        element: <CharactersListPage />,
      },
      {
        path: "/faq",
        element: <FaqPage/>
      }
    ],
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
