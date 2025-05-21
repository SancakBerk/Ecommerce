"use client";
import { categoryType, priceRangeType, productType } from "@/types/globalTypes";
import { getAllCategories, getAllProducts } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Input from "@/components/Input";
import CardType2 from "@/components/CardType2";
import Button from "@/components/Button";
import ProductProgressBar from "../../Home/components/ProductProgressBar";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { priceRanges } from "@/utils/constants";

const Products = () => {
  const locale = useLocale();
  const t = useTranslations("productPage");
  const router = useRouter();
  const pageSize = 12;

  const { data: categoriesData, isPending: categoriesIsPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const { data: productData, isPending: productIsPending } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });

  const searchParams = useSearchParams();
  const categoryIdFromUrl = searchParams.get("categoryId");

  const [categories, setCategories] = useState<categoryType[]>([]);
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number>();
  const [loadMoreValue, setLoadMoreValue] = useState<number>(1);
  const [products, setProducts] = useState<productType[]>([]);
  const [paginatedProducts, setPaginatedProducts] = useState<productType[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<
    priceRangeType[]
  >([]);

  const handleCategoryFilterClick = (eachCategory: categoryType) => {
    const params = new URLSearchParams({
      categoryId: eachCategory.categoryId.toString(),
    });
    router.push(`/${locale}/Products?${params.toString()}`);
  };

  const handleProductClick = (clickedProduct: productType) => {
    router.push(`/${locale}/Products/${clickedProduct.productId}`);
  };

  const handlePriceRangeClick = (eachPriceRange: priceRangeType) => {
    const exists = selectedPriceRanges.find(
      (range) =>
        range.from === eachPriceRange.from && range.to === eachPriceRange.to
    );
    let updatedRanges;
    if (exists) {
      updatedRanges = selectedPriceRanges.filter(
        (range) =>
          !(
            range.from === eachPriceRange.from && range.to === eachPriceRange.to
          )
      );
    } else {
      updatedRanges = [...selectedPriceRanges, eachPriceRange];
    }
    setSelectedPriceRanges(updatedRanges);

    const params = new URLSearchParams({
      priceRange: updatedRanges.map((r) => `${r.from}-${r.to}`).join(","),
      categoryId: categoryIdFromUrl || "",
    });
    router.push(`/${locale}/Products?${params.toString()}`);
  };

  useEffect(() => {
    if (categoriesData?.data) {
      setCategories(categoriesData.data as categoryType[]);
    }

    if (productData?.data) {
      let allProducts = productData.data as productType[];

      if (categoryIdFromUrl) {
        allProducts = allProducts.filter(
          (product) =>
            product.categoryId?.toString() === categoryIdFromUrl ||
            product.parentCategoryId?.toString() === categoryIdFromUrl
        );
      }

      if (selectedPriceRanges.length > 0) {
        allProducts = allProducts.filter((product) => {
          return selectedPriceRanges.some((range) => {
            return product.price >= range.from && product.price <= range.to;
          });
        });
      }

      setProducts(allProducts);
      setPaginatedProducts(allProducts.slice(0, loadMoreValue * pageSize));
    }
  }, [
    categoriesData,
    productData,
    categoryIdFromUrl,
    selectedPriceRanges,
    loadMoreValue,
  ]);

  if (categoriesIsPending || productIsPending) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
        <h1 className="text-2xl font-bold text-gray-500">{t("loading")}</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-row w-full px-[5vw] py-[4vh] gap-[2vw] mb-[20vh]">
      <div className="flex flex-col gap-[5vh] w-[15%] bg-white">
        <div className="px-[1vw] py-[3vh] w-full border border-[#E2E2E2]">
          <div className="border-l-2 border-2D2D2D pl-[1vw] mb-[1vh]">
            <h1
              onClick={() => {
                setOpenCategoryIndex(undefined);
                setSelectedPriceRanges([]);
                const params = new URLSearchParams({});
                router.push(`/${locale}/Products?${params.toString()}`);
              }}
              className="text-2D2D2D text-2xl hover:underline cursor-pointer "
            >
              {t("categories")}
            </h1>
          </div>
          {categories.map((eachCategory, index) => (
            <div key={eachCategory.categoryId} className="flex flex-col">
              <div
                onClick={() => {
                  setOpenCategoryIndex(
                    openCategoryIndex === index ? undefined : index
                  );
                }}
                className={`flex justify-between items-center ${
                  eachCategory.subCategories ? "cursor-pointer" : ""
                }`}
              >
                <h1
                  className="my-2 text-lg text-414141 cursor-pointer hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategoryFilterClick(eachCategory);
                  }}
                >
                  {eachCategory.name}
                  {eachCategory.subCategories &&
                    ` (${eachCategory.subCategories.length})`}
                </h1>
                {eachCategory.subCategories &&
                  (openCategoryIndex === index ? (
                    <FaAngleUp className="text-414141" />
                  ) : (
                    <FaAngleDown className="text-414141" />
                  ))}
              </div>
              <AnimatePresence initial={false}>
                {eachCategory.subCategories && openCategoryIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-y-2"
                  >
                    {eachCategory.subCategories.map((childCategory) => (
                      <h1
                        key={childCategory.categoryId}
                        className="text-sm text-414141 cursor-pointer hover:underline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategoryFilterClick(childCategory);
                        }}
                      >
                        {childCategory.name}
                      </h1>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="px-[1vw] py-[3vh] w-full border border-[#E2E2E2]">
          <div className="border-l-2 border-2D2D2D pl-[1vw] mb-[2vh]">
            <h1
              onClick={() => {
                setOpenCategoryIndex(undefined);
                setSelectedPriceRanges([]);
                const params = new URLSearchParams({});
                router.push(`/${locale}/Products?${params.toString()}`);
              }}
              className="text-2D2D2D text-2xl hover:underline cursor-pointer"
            >
              {t("priceRange")}
            </h1>
          </div>
          {priceRanges.map((eachPriceRange) => {
            const isChecked = selectedPriceRanges.some(
              (range) =>
                range.from === eachPriceRange.from &&
                range.to === eachPriceRange.to
            );
            return (
              <div
                key={`${eachPriceRange.from}-${eachPriceRange.to}`}
                className="flex cursor-default"
              >
                <div className="flex items-center gap-x-2">
                  <input
                    checked={isChecked}
                    onChange={() => handlePriceRangeClick(eachPriceRange)}
                    type="checkbox"
                    className="mr-[1vw] appearance-none w-5 h-5 border border-gray-400 rounded-sm checked:bg-[#3D3D3D] checked:border-[#3D3D3D] checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:block checked:after:text-center"
                  />
                  <h1 className="my-2 text-lg text-414141">
                    {eachPriceRange.currency} {eachPriceRange.from} -{" "}
                    {eachPriceRange.currency} {eachPriceRange.to}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col w-[85%] bg-white gap-y-[4vh]">
        <h1 className="text-4xl font-bold">{t("ourCollectionOfProducts")}</h1>
        <Input
          placeholder={t("searchAnItem")}
          darkBackground={false}
          width="w-full"
        />
        <div>
          <p className=" text-414141 font-bold ">
            {t("showing")} 1-{paginatedProducts.length} {t("of")}{" "}
            {products.length} {t("items")}
          </p>
          <p className=" text-[#949494] ">{t("subParagraph")}</p>
        </div>
        <div className="flex flex-wrap w-full justify-evenly gap-x-[2vh] gap-y-[6vh]">
          {paginatedProducts.map((eachProduct) => (
            <div
              key={eachProduct.productId}
              className="w-[30%]"
              onClick={() => handleProductClick(eachProduct)}
            >
              <CardType2 product={eachProduct} />
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center gap-y-4">
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
  );
};

export default Products;
