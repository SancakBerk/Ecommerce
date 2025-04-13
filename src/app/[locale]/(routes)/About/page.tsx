import React from "react";
import { getTranslations } from "next-intl/server";

const About = async () => {
  const t = await getTranslations("HomePage");
  return (
    <div>
      <p> {t("title")} </p>
    </div>
  );
};

export default About;
