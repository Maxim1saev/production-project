import { useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./styles.module.scss";

const AboutPage = () => {
  const { t } = useTranslation("about");

  return (
    <>
      <h1>{t("about page")}</h1>;
    </>
  );
};

export default AboutPage;
