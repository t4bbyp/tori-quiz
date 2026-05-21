import { useEffect } from "react";
import { useParams } from "react-router"
import Editor from "../components/Editor";
import Header from "../components/Header";

export default function EditCharacterPage() {
  const params = useParams();

  useEffect(() => {
    document.body.classList.add("edit-page");

    return () => {
      document.body.classList.remove("edit-page");
    };
  }, []);

  return (
    <>
      <Header />
      <h2>Editar personaje</h2>

      <Editor pjId={params.id} />
    </>
  );
}
