import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Editor from "../components/Editor";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import CharaList from "../components/CharaList";

export default function EditCharacterPage() {
  const [session, setSession] = useState(undefined);
  const params = useParams();
  const navigate = useNavigate();
  const isEditing = !!params.id;

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
      {!isEditing && (
        <>
          <CharaList onSelect={(c) => navigate(`/edit/${c.character_id}`)} />
        </>
      )}

      {isEditing && <Editor pjId={params.id} />}
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
