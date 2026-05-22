import {
  Form,
  useActionData,
  useNavigation,
} from "react-router-dom";
import classes from "./LoginForm.module.css";

export default function LoginForm() {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className={`mybox ${classes.login}`}>
        <h2>Necesitas una cuenta para seguir :D</h2>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}

        {data && data.message && <p>{data.message}</p>}

        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" name="password" required />
        </p>

        <button disabled={isSubmitting} className="start">
          {isSubmitting ? "Submitting..." : "Entra"}
        </button>
      </Form>
    </>
  );
}
