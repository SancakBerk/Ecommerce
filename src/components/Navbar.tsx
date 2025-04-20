"use client";
import { JSX, useState } from "react";
import { useRouter } from "next/navigation";
import { FaBagShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";
import HomePageIcon from "../../public/logo-70.png";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import HomePageIconSvg from "../../public/logo-70.svg";
import Link from "next/link";
import { useLocale } from "next-intl";

interface NavbarProps extends React.HTMLProps<HTMLDivElement> {
  darkText?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ darkText = false }): JSX.Element => {
  const locale = useLocale();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations("homePage");

  const handleNavigation = (category: string) => {
    setDropdownOpen(false);
    router.push(`/category/${category}`);
  };

  return (
    <div className="w-full h-[5vh] flex justify-center items-center z-10 pt-5 relative ">
      <div className="w-3/4 h-full flex justify-between">
        <Link
          className="w-1/5 h-full flex justify-center items-center"
          href={`/${locale}/Home`}
        >
          <Image
            src={darkText ? HomePageIconSvg : HomePageIcon}
            alt="Icon"
            style={{ objectFit: "contain" }}
          />
        </Link>

        <div
          className={`w-1/3 flex gap-x-10 ${
            darkText ? "text-black" : "text-white"
          } v  items-center relative `}
        >
          <motion.button
            whileHover={{ scale: 1.1, transition: { duration: 2 } }}
            type="button"
          >
            {t("home")}
          </motion.button>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-transparent px-2 py-1 flex gap-2 justify-center items-center"
            >
              {t("categories")} {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white text-black shadow-md rounded-md z-50">
                <button
                  onClick={() => handleNavigation("armani")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  ARMANI
                </button>
                <button
                  onClick={() => handleNavigation("gucci")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  GUCCI
                </button>
                <button
                  onClick={() => handleNavigation("prada")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  PRADA
                </button>
              </div>
            )}
          </div>

          <motion.button type="button">{t("contactUs")}</motion.button>
          <motion.button type="button">{t("blog")}</motion.button>
        </div>

        <div className="w-1/5 flex justify-center items-center gap-x-6">
          <IoPerson
            className={`  ${
              darkText ? "text-black" : "text-white"
            } cursor-pointer`}
          />
          <FaBagShopping
            className={`  ${
              darkText ? "text-black" : "text-white"
            } cursor-pointer`}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
