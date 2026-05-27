import Accordion from "../components/accordion";
import { useTranslation } from "react-i18next";
import FaqString from "../components/translated-modules/faq-strings";

export default function FaqPage() {
  const { t } = useTranslation();

  return (
    <>
      <h2>FaQ</h2>

      <Accordion title={t(($) => $.faq.q1)} content={t(($) => $.faq.a1)} />
      <Accordion title={t(($) => $.faq.q2)} content={<FaqString stringKey="faq.a2" link="https://scriptamanent.foroactivo.com/" />} />
      <Accordion title={t(($) => $.faq.q3)} content={<FaqString stringKey="faq.a3" />} />
      <Accordion title={t(($) => $.faq.q4)} content={<FaqString stringKey="faq.a4" />} />
      <Accordion title={t(($) => $.faq.q5)} content={t(($) => $.faq.a5)} />
      <Accordion title={t(($) => $.faq.q6)} content={<FaqString stringKey="faq.a6" link="https://picrew.me/en/image_maker/1108773" />} />
      <Accordion title={t(($) => $.faq.q7)} content={t(($) => $.faq.a7)} />
    </>
  );
}
