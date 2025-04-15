import CustomInput from "@/components/Input";
import { useTranslations } from "next-intl";
import { JSX } from "react";

const HeaderContainer = (): JSX.Element => {
  const t = useTranslations("homePage");
  return (
    <>
      <video
        className="absolute top-0 left-0 w-[100vw] h-[72vh] object-cover -z-10  "
        autoPlay
        loop
        muted
      >
        <source src="/VideoBackground.webm" type="video/webm" />
      </video>
      <div className="w-full h-[72vh] flex flex-col justify-center items-center relative ">
        <div className=" w-3/4 h-1/2 flex flex-col justify-center items-center gap-y-12 ">
          <p className="font-bold text-[45px] text-center  text-white">
            {" "}
            {t("headerTitle")}{" "}
          </p>
          <p className="w-3/4 text-center text-CECCCC ">
            {" "}
            {t("headerSubText")}{" "}
          </p>
          <CustomInput placeholder={t("searchAnItem")} />
        </div>
      </div>
    </>
  );
};
export default HeaderContainer;
