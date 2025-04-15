import { JSX } from "react";

import { useTranslations } from "next-intl";
import Logo from "../../public/logo-70.png";
import Image from "next/image";
import Input from "./Input";

import { FaChevronRight } from "react-icons/fa";
const Footer = (): JSX.Element => {
  const t = useTranslations("homePage");
  return (
    <div className="bg-[#282828] text-white flex flex-col h-[90vh]   ">
      <div className="flex justify-evenly items-center gap-4 w-full h-[10%] bg-666666">
        <Image src={Logo} alt="Logo" />
        <Image src={Logo} alt="Logo" />
        <Image src={Logo} alt="Logo" />
        <Image src={Logo} alt="Logo" />
        <Image src={Logo} alt="Logo" />
        <Image src={Logo} alt="Logo" />
        <Image src={Logo} alt="Logo" />
      </div>
      <div className=" items-center flex flex-col gap-y-[5%] w-full h-[90%] bg-[#282828]  ">
        <div className="w-1/2 flex justify-evenly items-center flex-col h-[50%]  text-center p-[5%]  gap-10">
          <Image src={Logo} alt="Logo" width={100} />
          <h1 className=" text-[4vh] "> {t("footerTitle")} </h1>
          <Input
            placeholder={t("footerPlaceholder")}
            Icon={<FaChevronRight />}
          />
        </div>
        <div className="flex justify-evenly w-full items-center h-[35%] px-[5%] ">
          <div className="flex flex-col   justify-evenly  h-full w-[20%] ">
            <h1 className=" mb-[2vh] text-[#9A9A9A]  "> {t("products")} </h1>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
          </div>
          <div className="flex flex-col   justify-evenly h-full w-[20%] ">
            <h1 className=" mb-[2vh] text-[#9A9A9A]  "> {t("products")} </h1>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
          </div>
          <div className="flex flex-col   justify-evenly h-full w-[20%] ">
            <h1 className=" mb-[2vh] text-[#9A9A9A]  "> {t("products")} </h1>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
          </div>
          <div className="flex flex-col   justify-evenly h-full w-[20%] ">
            <h1 className=" mb-[2vh] text-[#9A9A9A]  "> {t("products")} </h1>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
          </div>
          <div className="flex flex-col   justify-evenly h-full w-[20%] ">
            <h1 className=" mb-[2vh] text-[#9A9A9A]  "> {t("products")} </h1>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
            <p>{t("products")}</p>
          </div>
        </div>
        <div className="w-full border-t-2 border-white h-[5%] flex justify-center items-center ">
          <p className="text-white text-center text-sm">{t("copyRight")}</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
