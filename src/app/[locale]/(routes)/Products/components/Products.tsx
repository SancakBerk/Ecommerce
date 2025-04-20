"use client";
import { Category, priceRangeType } from "@/app/types/globalTypes";
import { getCategories, getProducts } from "@/services/productService";
import { priceRanges } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { JSX, useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Product } from "@/app/types/homePageTypes";
import Input from "@/components/Input";
import CardType2 from "@/components/CardType2";
import Button from "@/components/Button";
import ProductProgressBar from "../../Home/components/ProductProgressBar";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const Products = (): JSX.Element => {
  const locale = useLocale();
  const t = useTranslations("productPage");
  const [, setselectedCategory] = useState<Category>();
  const { data: categoriesData, isPending: categoriesIsPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  const { data: productData, isPending: productIsPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [openCategoryIndex, setopenCategoryIndex] = useState<number>();
  const [loadMoreValue, setLoadMoreValue] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedPriceRange, setselectedPriceRange] = useState<
    priceRangeType[]
  >([]);

  const router = useRouter();
  const pageSize = 12;
  const paginatedProducts = products.slice(0, loadMoreValue * pageSize);

  const handleProductClick = (clickedProduct: Product) => {
    router.push(`/${locale}/Products/${clickedProduct.productId}`);
  };
  useEffect(() => {
    if (categoriesData?.data) {
      setCategories(categoriesData.data as Category[]);
    }
    if (productData?.data) {
      setProducts(productData.data as Product[]);
      console.log("useeffect productData", productData.data);
    }
  }, [categoriesData, productData]);

  if (categoriesIsPending || productIsPending) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
        <h1 className="text-2xl font-bold text-gray-500">{t("loading")}</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-row w-full  px-[5vw] py-[4vh]  gap-[2vw] mb-[20vh] ">
      {/* Filters Side Bar  */}
      <div className="flex flex-col gap-[5vh] w-[15%]  bg-white    ">
        {/* Categories Range  */}
        <div className="px-[1vw] py-[3vh] w-full   border-1 border-[#E2E2E2] ">
          <div className=" border-l-2 border-2D2D2D pl-[1vw] mb-[1vh]  ">
            <h1 className=" text-2D2D2D text-2xl   "> {t("categories")} </h1>
          </div>
          {categories &&
            categories.map((eachCategory: Category, index: number) => {
              return (
                <div key={index} className="flex flex-col">
                  <div
                    onClick={() => {
                      if (openCategoryIndex === index) {
                        setopenCategoryIndex(undefined);
                      } else {
                        setopenCategoryIndex(index);
                      }
                    }}
                    className={`flex  justify-between items-center ${
                      eachCategory.subCategories ?? "cursor-pointer"
                    } `}
                  >
                    <h1
                      key={index}
                      className="my-2 text-lg  text-414141 cursor-pointer hover:underline "
                      onClick={(e) => {
                        e.stopPropagation();
                        setselectedCategory(eachCategory);
                      }}
                    >
                      {eachCategory.name}
                      {eachCategory.subCategories &&
                        `(${eachCategory.subCategories?.length}) `}
                    </h1>
                    {eachCategory.subCategories &&
                    openCategoryIndex == index ? (
                      <FaAngleUp className="text-414141" />
                    ) : (
                      <FaAngleDown className="text-414141" />
                    )}
                  </div>
                  <AnimatePresence initial={false}>
                    {eachCategory.subCategories &&
                      openCategoryIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-y-2 "
                        >
                          {eachCategory.subCategories.map(
                            (childCategory: Category, index: number) => (
                              <h1
                                key={index}
                                className=" text-sm text-414141 cursor-pointer hover:underline"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setselectedCategory(childCategory);
                                }}
                              >
                                {childCategory.name}
                              </h1>
                            )
                          )}
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              );
            })}
        </div>
        {/* Price Range  */}
        <div className="px-[1vw] py-[3vh] w-full   border-1 border-[#E2E2E2] ">
          <div className=" border-l-2 border-2D2D2D pl-[1vw] mb-[2vh] ">
            <h1 className=" text-2D2D2D text-2xl   "> {t("priceRange")} </h1>
          </div>
          {priceRanges &&
            priceRanges.map((eachPriceRange: priceRangeType, index: number) => {
              return (
                <div key={index} className="flex  cursor-default">
                  <div className={`flex items-center  gap-x-2  `}>
                    <input
                      onChange={(e) => {
                        if (e.target.checked) {
                          setselectedPriceRange((prev) => [
                            ...prev,
                            eachPriceRange,
                          ]);
                        } else {
                          setselectedPriceRange((prev) =>
                            prev.filter(
                              (item) =>
                                item.from !== eachPriceRange.from ||
                                item.to !== eachPriceRange.to
                            )
                          );
                        }
                        console.log("selectedPriceRange", selectedPriceRange);
                      }}
                      type="checkbox"
                      className="mr-[1vw] appearance-none w-5 h-5 border border-gray-400 rounded-sm checked:bg-[#3D3D3D] checked:border-[#3D3D3D] checked:text-white checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:block checked:after:text-center"
                    />
                    <h1 key={index} className="my-2 text-lg   text-414141  ">
                      {eachPriceRange.currency} {eachPriceRange.from.toString()}{" "}
                      - {eachPriceRange.currency} {eachPriceRange.to}{" "}
                    </h1>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* Products List  */}
      <div className="flex flex-col w-[85%]  bg-white  gap-y-[4vh] ">
        <h1 className=" text-4xl font-bold ">
          {" "}
          {t("ourCollectionOfProducts")}{" "}
        </h1>
        <Input
          placeholder={t("searchAnItem")}
          darkBackground={false}
          width="w-fullvv"
        />

        <div>
          <p>
            {t("showing")} 1-12 {t("of")} 24 {t("items")}{" "}
          </p>
          <p> {t("subParagraph")} </p>
        </div>
        <div className="flex flex-wrap w-full justify-between gap-x-[2vh]  gap-y-[6vh]  ">
          {paginatedProducts.map((eachProduct: Product) => {
            return (
              <div
                key={eachProduct.productId}
                className="w-[30%]  "
                onClick={() => handleProductClick(eachProduct)}
              >
                <CardType2 product={eachProduct} />
              </div>
            );
          })}
          <div className="w-full flex  items-center justify-center gap-y-4">
            <div className="w-[40%] flex flex-col justify-center items-center gap-y-4">
              <ProductProgressBar
                currentCount={paginatedProducts.length}
                totalCount={products.length}
              />
              {loadMoreValue * pageSize < products.length && (
                <Button
                  text={t("loadMore")}
                  onClick={() => setLoadMoreValue((prev) => prev + 1)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
