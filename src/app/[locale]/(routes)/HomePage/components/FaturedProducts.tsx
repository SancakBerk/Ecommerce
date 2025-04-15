"use client";
import { JSX, useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { products } from "../../../../../utils/constants";
import { Product } from "@/app/types/homePageTypes";
import Card from "@/components/Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { categories } from "../../../../../utils/constants";
import { motion } from "motion/react";
import Button from "@/components/Button";

const FeaturedProducts = (): JSX.Element => {
  const firstFourCategories = categories.slice(0, 4);
  const t = useTranslations("homePage");
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, slidesToScroll: 3 },
    [Autoplay({ delay: 8000, stopOnInteraction: false })]
  );

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
  }, [emblaApi, updateButtons]);

  return (
    <div className="w-full h-auto p-[4%]">
      <div className="flex items-center justify-between mb-10">
        <p className="text-[#3D3D3D] text-[50px] px-[5%] ">
          {t("featuredProducts")}
        </p>
        <p className="text-[#666666] text-lg w-1/4 ">
          {t("featuredProductsSubText")}
        </p>
      </div>

      <section className="relative w-full">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {products.map((product: Product, index: number) => (
              <div key={index} className="embla__slide flex-shrink-0 w-[400px]">
                <Card
                  name={product.name}
                  bgImage={product.imageUrl}
                  discountPercentage={13}
                  width="w-[500px]"
                  isVertical={true}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          disabled={prevDisabled}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 disabled:opacity-30"
        >
          <FaAngleLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          disabled={nextDisabled}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 disabled:opacity-30"
        >
          <FaAngleRight size={24} />
        </button>
      </section>

      <div className="flex flex-col items-center justify-center mt-[15vh] w-full">
        <h1 className="text-5xl font-bold text-3D3D3D w-1/2 text-center">
          {" "}
          {t("categoriesTitle")}{" "}
        </h1>
        <p className="text-666666  text-lg w-1/2 text-center">
          {" "}
          {t("categoriesSubText")}{" "}
        </p>
      </div>
      <div className="flex h-1/2 justify-center items-center gap-4 mt-10">
        <motion.button>
          <Card
            bgImage={firstFourCategories[0].imageUrl}
            width="h-full"
            name={firstFourCategories[0].name}
          />
        </motion.button>
        <div className="flex justify-center items-center flex-col gap-4">
          <motion.button>
            <Card
              bgImage={firstFourCategories[1].imageUrl}
              width="w-[400px]"
              name={firstFourCategories[1].name}
            />
          </motion.button>
          <motion.button>
            <Card
              bgImage={firstFourCategories[2].imageUrl}
              width="w-[400px]"
              name={firstFourCategories[2].name}
            />
          </motion.button>
        </div>
        <motion.button>
          <Card
            bgImage={firstFourCategories[3].imageUrl}
            width="h-full"
            name={firstFourCategories[3].name}
          />
        </motion.button>
      </div>

      <div className="flex flex-col w-full ">
        <div className="flex w-full justify-between items-center mt-[10vh] px-[5%]">
          <div className=" flex flex-col gap-y-[3vh] ">
            <h1 className="text-4xl font-bold text-3D3D3D">
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
                        {product.price * (100 - product.discountPercentage)}
                        {"TL"}
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
                    <p className="  "> {product.price} </p>
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
    </div>
  );
};

export default FeaturedProducts;
