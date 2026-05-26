import { Trans, useTranslation } from "react-i18next";

export default function Welcome() {
  useTranslation();

  return (
    <>
      <p>
        <Trans
          i18nKey="welcome.description"
          components={{
            italic: <i />,
            link: (
              <a href="https://scriptamanent.foroactivo.com/f2-la-cuarta-generacion">La Cuarta Generación</a>
            ),
          }}
        />
      </p>
    </>
  );
}