import CustomInput from "@/components/Input";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { JSX } from "react";

const HeaderContainer = (): JSX.Element => {
  const t = useTranslations("homePage");
  return (
    <motion.div
      className="w-screen h-[96vh]   overflow-hidden"
      initial={{
        backgroundColor: "rgba(0, 0, 0, 1)",
        opacity: 0,
      }}
      animate={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        opacity: 1,
      }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.video
        className=" absolute top-0 left-0 w-full h-[100vh] object-cover -z-10   "
        autoPlay
        loop
        muted
      >
        <source src="/VideoBackground.webm" type="video/webm" />
      </motion.video>
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
    </motion.div>
  );
};
export default HeaderContainer;
