import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Editor from "../components/Editor";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function EditCharacterPage() {
  const [session, setSession] = useState(undefined);
  const params = useParams();

  useEffect(() => {
    document.body.classList.add("edit-page");

    return () => {
      document.body.classList.remove("edit-page");
    };
  }, []);

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
      <Header />
      <h2>Editar personaje</h2>

      <Editor pjId={params.id} />
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

  return redirect("/edit");
}
