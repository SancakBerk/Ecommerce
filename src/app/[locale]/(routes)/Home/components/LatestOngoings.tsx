import { JSX } from "react";

import { useTranslations } from "next-intl";
import Button from "@/components/Button";
import Image from "next/image";
import { latestOngoings, MONTHS_TR } from "@/utils/constants";
import { OngoingItem } from "@/app/types/homePageTypes";
import Card from "@/components/Card";
const LatestOnGoings = (): JSX.Element => {
  const t = useTranslations("homePage");
  return (
    <div className="w-full h-auto flex flex-col p-[5%]  ">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-y-[2vh] w-1/2 ">
          <h1 className="text-[3vw] font-bold"> {t("latestOnGoings")} </h1>
          <p> {t("latestOnGoingsSubText")} </p>
        </div>
        <Button text={t("readAllBlogs")} width=" " />
      </div>
      <div className="flex w-full gap-4 justify-center items-center mt-[5vh]">
        {latestOngoings.map((eachOngoing: OngoingItem, index) => {
          const date = new Date(eachOngoing.date);
          return (
            <div key={index} className="w-1/3 flex flex-col gap-y-[1vh]">
              <Card
                bgImage={eachOngoing.imageUrl}
                isVertical={false}
                width="w-[100%] "
              />
              <div className="flex gap-4 items-center text-[#404040] ">
                <div className="relative w-10 h-10 min-w-10 min-h-10">
                  <Image
                    src={eachOngoing.authorImageUrl}
                    alt="AuthorImage"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <p>{eachOngoing.author}</p>
                <div className="w-2 h-2 border-4 bg-black rounded-full"></div>
                <div className="flex gap-1">
                  <p>{date.getDay().toString()}</p>
                  <p>{MONTHS_TR[date.getMonth()]}</p>
                  <p>{date.getFullYear().toString()}</p>
                </div>
              </div>
              <p className="text-[#404040]"> {eachOngoing.description} </p>

              <p> </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LatestOnGoings;
