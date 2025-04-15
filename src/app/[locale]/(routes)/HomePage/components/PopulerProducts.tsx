import { JSX } from "react";

import { products } from "../../../../../utils/constants";
import { motion } from "motion/react";
import Card from "@/components/Card";
import { useTranslations } from "next-intl";
import Button from "@/components/Button";
import { Product } from "@/app/types/homePageTypes";
const PopulerProducts = (): JSX.Element => {
  const t = useTranslations("homePage");
  return (
    <div className="flex flex-col w-full  p-[5%]">
      <div className="flex w-full justify-between items-center mt-[10vh] px-[5%]">
        <div className=" flex flex-col gap-y-[3vh] ">
          <h1 className="text-[3vw] font-bold text-3D3D3D">
            {" "}
            {t("mostPopularProducts")}{" "}
          </h1>
          <p className=" text-666666 text-base v ">
            {" "}
            {t("mostPopularProductsSubText")}{" "}
          </p>
        </div>
        <Button text="Read ALL Blogs" />
      </div>
      <div className="flex flex-wrap w-full justify-evenly items-center">
        {products.slice(0, 8).map((product: Product, index: number) => (
          <div key={index} className=" w-[23%]  p-4 flex flex-col">
            <Card
              bgImage={product.imageUrl}
              discountPercentage={13}
              width=" "
              isVertical={true}
            />
            <p className=" text-[#404040] text-2xl "> {product.name} </p>
            <div>
              {" "}
              {product.discountPercentage != undefined ? (
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-x-4 h-full">
                    <p className=" line-through text-[#404040] ">
                      {" "}
                      {product.price} TL{" "}
                    </p>
                    <p>
                      {" "}
                      {(
                        (product.price * (100 - product.discountPercentage)) /
                        100
                      ).toFixed(2)}
                      {" TL"}
                    </p>
                  </div>
                  <motion.button
                    className="rounded-full border  bg-white border-black p-2 aspect-square h-full  flex justify-center items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {" "}
                    +
                  </motion.button>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <p className="  ">
                    {" "}
                    {product.price} {"TL"}
                  </p>
                  <motion.button className="rounded-full border bg-white border-black p-2 aspect-square h-full  flex justify-center items-center">
                    {" "}
                    +
                  </motion.button>
                </div>
              )}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopulerProducts;
