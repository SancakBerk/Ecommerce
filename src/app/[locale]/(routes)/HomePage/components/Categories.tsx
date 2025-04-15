import { JSX } from "react";

import { categories } from "../../../../../utils/constants";
import { motion } from "motion/react";
import Card from "@/components/Card";
import { useTranslations } from "next-intl";
const Categories = (): JSX.Element => {
  const firstFourCategories = categories.slice(0, 4);
  const t = useTranslations("homePage");
  return (
    <div>
      <div className="flex flex-col items-center justify-center   w-full p-[4%]">
        <h1 className="text-5xl font-bold text-3D3D3D w-1/2 text-center">
          {" "}
          {t("categoriesTitle")}{" "}
        </h1>
        <p className="text-666666  text-lg w-1/2 text-center">
          {" "}
          {t("categoriesSubText")}{" "}
        </p>
      </div>
      <div className="flex h-1/2 justify-center items-center gap-4  px-[4%]">
        <motion.button>
          <Card
            animated={false}
            bgImage={firstFourCategories[0].imageUrl}
            width="h-full"
            name={firstFourCategories[0].name}
          />
        </motion.button>
        <div className="flex justify-center items-center flex-col gap-4">
          <motion.button>
            <Card
              animated={false}
              bgImage={firstFourCategories[1].imageUrl}
              width="w-[400px]"
              name={firstFourCategories[1].name}
            />
          </motion.button>
          <motion.button>
            <Card
              animated={false}
              bgImage={firstFourCategories[2].imageUrl}
              width="w-[400px]"
              name={firstFourCategories[2].name}
            />
          </motion.button>
        </div>
        <motion.button>
          <Card
            animated={false}
            bgImage={firstFourCategories[3].imageUrl}
            width="h-full"
            name={firstFourCategories[3].name}
          />
        </motion.button>
      </div>
    </div>
  );
};
export default Categories;
