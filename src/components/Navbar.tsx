"use client";
import { JSX } from "react";
import { motion } from "framer-motion";

import { FaBagShopping } from "react-icons/fa6";
import HomePageIcon from "../../public/logo-70.png";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";
import { useTranslations } from "next-intl";
// import Link from "next/link";
import { useRouter } from "next/navigation";
const Navbar = (): JSX.Element => {
  const router = useRouter();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    if (selected) {
      router.push(`/category/${selected}`); // örneğin: /category/armani
    }
  };
  const t = useTranslations("homePage");
  return (
    <div className="w-full h-10  flex justify-center items-center  z-10 mt-5  ">
      <div className=" w-3/4 h-full flex  justify-between   ">
        <div className=" w-1/5 h-full flex justify-center items-center">
          <Image
            src={HomePageIcon}
            alt=" Icon"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-1/4 flex gap-x-10 text-white font-bold ">
          <motion.button
            whileHover={{ scale: 1.1, transition: { duration: 2 } }}
            type="button"
          >
            {" "}
            {t("home")}{" "}
          </motion.button>

          <select
            name={t("categories")}
            id="categories"
            className=" border-none outline-none bg-transparent px-2 py-1"
            onChange={handleChange}
            value={t("categories")}
          >
            <option value="armani" className="text-black ">
              ARMANI
            </option>
            <option value="gucci" className="text-black ">
              GUCCI
            </option>
            <option value="prada" className="text-black ">
              PRADA
            </option>
          </select>
          <motion.button type="button"> {t("contactUs")} </motion.button>
          <motion.button type="button"> {t("blog")} </motion.button>
        </div>
        <div className=" w-1/5 flex justify-center items-center  gap-x-6">
          <IoPerson className="text-white  cursor-pointer" />
          <FaBagShopping className="text-white  cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
