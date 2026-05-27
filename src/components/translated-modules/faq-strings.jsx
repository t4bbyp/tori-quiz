import { Trans, useTranslation } from "react-i18next";

export default function FaqString({ stringKey, link }) {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <Trans
          t={t}
          i18nKey={stringKey}
          components={{
            br: <br />,
            i: <i />,
            a: <a href={link} target="_blank" />,
          }}
        />
      </p>
    </>
  );
}
