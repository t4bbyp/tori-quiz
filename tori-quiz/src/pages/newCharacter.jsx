import { QuizContext } from "../store/quizContex";
import Landing from "../components/Landing";
import Quiz from "../components/Quiz";
import { useContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import LoginForm from "../components/LoginForm";
import { redirect } from "react-router-dom";

export default function NewCharacterPage() {
  const [session, setSession] = useState(undefined);
  const quizCtx = useContext(QuizContext);
  const mode = "new";

  useEffect(() => {
    async function getSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);
    }

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        localStorage.setItem("loginTime", Date.now());
      }

      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (session === undefined) {
    return <p>Cargando...</p>;
  }

  if (session === null) {
    return <LoginForm />;
  }

  return (
    <>
      {quizCtx.pjName === "" && <Landing mode={mode} />}
      {quizCtx.pjName !== "" && <Quiz mode={mode} />}
    </>
  );
}

export async function action({ request }) {
  const data = await request.formData();

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(authData);

  if (error) {
    return {
      message: error.message,
    };
  }

  localStorage.setItem("loginTime", Date.now());

  return redirect("/new");
}
