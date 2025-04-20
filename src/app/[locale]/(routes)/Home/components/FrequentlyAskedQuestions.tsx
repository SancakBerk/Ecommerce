import { JSX } from "react";

import { useTranslations } from "next-intl";
import Button from "@/components/Button";

import { Accordion } from "@/components/Accordion";
const FrequentlyAskedQuestions = (): JSX.Element => {
  const t = useTranslations("homePage");
  return (
    <div className="flex h-auto justify-center p-[5%] ">
      <div className=" flex flex-col gap-y-[2vh] w-1/2  ">
        <h1 className="text-[3vw] font-bold ">
          {" "}
          {t("frequentlyAskedQuestions")}{" "}
        </h1>
        <p className=" text-666666"> {t("frequentlyAskedQuestionsSubText")} </p>
        <Button text={t("askAQuestion")} />
      </div>
      <div className=" flex flex-col gap-y-[2vh] w-1/2 px-[4%] ">
        <Accordion
          title={t("askAQuestionItem1Title")}
          content={t("askAQuestionItem1SubText")}
          isopen={true}
        />
        <Accordion
          title={t("askAQuestionItem2Title")}
          content={t("askAQuestionItem2SubText")}
        />{" "}
        <Accordion
          title={t("askAQuestionItem3Title")}
          content={t("askAQuestionItem3SubText")}
        />{" "}
        <Accordion
          title={t("askAQuestionItem4Title")}
          content={t("askAQuestionItem4SubText")}
        />
      </div>
    </div>
  );
};
export default FrequentlyAskedQuestions;
