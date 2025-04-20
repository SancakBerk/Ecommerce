import { JSX } from "react";

import { useTranslations } from "next-intl";
import Button from "@/components/Button";

import Counter from "@/components/Counter";
const Proportions = (): JSX.Element => {
  const t = useTranslations("homePage");
  return (
    <div className="w-full h-[66vh]  bg-666666 flex justify-center items-center p-[5%] ">
      <div className="w-full h-auto  rounded-2xl flex   gap-x-10 justify-center">
        <div className="flex flex-col w-1/2  gap-y-10  ">
          <h1 className=" w-3/4 text-white text-[2vw]">
            {" "}
            {t("sellingProportions")}{" "}
          </h1>
          <Button text={t("readMore")} />
        </div>
        <div className="flex flex-col w-1/2  gap-y-10   ">
          <div className=" text-white">
            <p> {t("sellingProportionsSubTextTop")} </p>
          </div>
          <div className="flex text-white gap-2.5 ">
            <div className="flex flex-col gap-y-4 w-1/2">
              <Counter end={99} counterClass="text-[48px] " />
              <p> {t("sellingProportionsSubText2")} </p>
            </div>
            <div className="flex flex-col gap-y-4 w-1/2 text-white">
              <Counter end={100} counterClass="text-[48px] " />
              <p> {t("sellingProportionsSubText3")} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proportions;
