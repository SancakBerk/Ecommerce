import { JSX, useEffect, useState } from "react";

import Card from "@/components/Card";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "@/services/productService";
import { categoryType } from "@/types/globalTypes";
const Categories = (): JSX.Element => {
  const { data: allCategoryServiceReturn } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  const [categoriesData, setCategoriesData] = useState<categoryType[]>([]);
  const t = useTranslations("homePage");
  useEffect(() => {
    if (allCategoryServiceReturn?.success && allCategoryServiceReturn.data) {
      setCategoriesData(allCategoryServiceReturn.data.splice(0, 4));
    }
  }, [allCategoryServiceReturn]);
  return (
    <div className="p-[5%] flex flex-col gap-[5vh] ">
      <div className="flex flex-col items-center justify-center   w-full ">
        <h1 className="text-5xl font-bold text-3D3D3D w-1/2 text-center">
          {" "}
          {t("categoriesTitle")}{" "}
        </h1>
        <p className="text-666666  text-lg w-1/2 text-center">
          {" "}
          {t("categoriesSubText")}{" "}
        </p>
      </div>
      {categoriesData.length == 0 ? (
        <div>Data Fetching.. </div>
      ) : (
        <div className="flex h-1/2 justify-center items-center gap-4  ">
          <Card
            animateDuration={2}
            bgImage={categoriesData[0].imageUrl}
            width="h-full"
            name={categoriesData[0].name}
          />
          <div className="flex justify-center items-center flex-col gap-4">
            <Card
              animateDuration={2}
              bgImage={categoriesData[1].imageUrl}
              width="w-[400px]"
              name={categoriesData[1].name}
            />
            <Card
              animateDuration={2}
              bgImage={categoriesData[2].imageUrl}
              width="w-[400px]"
              name={categoriesData[2].name}
            />
          </div>
          <Card
            animateDuration={2}
            bgImage={categoriesData[3].imageUrl}
            width="h-full"
            name={categoriesData[3].name}
          />
        </div>
      )}
    </div>
  );
};
export default Categories;
