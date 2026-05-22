import {
  Form,
  useActionData,
  useNavigation,
} from "react-router-dom";

export default function LoginForm() {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post">
        <h2>Entra en tu cuenta</h2>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}

        {data && data.message && <p>{data.message}</p>}

        <p>
          <label htmlFor="email">Nombre de usuario</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>

        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Login"}
        </button>
      </Form>
    </>
  );
}
