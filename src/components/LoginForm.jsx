import {
  Form,
  useActionData,
  useNavigation,
} from "react-router-dom";
import classes from "./LoginForm.module.css";
import {useTranslation} from 'react-i18next';

export default function LoginForm() {
  const {t} = useTranslation();
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className={`mybox ${classes.login}`}>
        <h2>{t($ => $.login.text)}</h2>
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
          <label htmlFor="password">{t($ => $.login.password)}</label>
          <input id="password" type="password" name="password" required />
        </p>

        <button disabled={isSubmitting} className="start">
          {isSubmitting ? t($ => $.login.loging) : t($ => $.buttons.login)}
        </button>
      </Form>
    </>
  );
}
