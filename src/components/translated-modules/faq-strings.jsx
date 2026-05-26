import { Trans } from "react-i18next";

export default function FaqString({stringKey, link}) {
    return (
    <>
      <p>
        <Trans
          i18nKey={stringKey}
          components={{
            br: <br />,
            i: <i />,
            a: <a href={link} />
          }}
        />
      </p>
    </>
  );

}