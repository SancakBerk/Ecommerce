"use client";
import React, { JSX, useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import { productType } from "@/types/globalTypes";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import CardType2 from "@/components/CardType2";
import { useQuery } from "@tanstack/react-query";
import { serviceReturnType } from "@/types/globalTypes";
import Button from "./Button";
import Card from "./Card";
import { motion } from "motion/react";
import { getRandomItems } from "@/utils/funcitons";

interface ProductsDisplayTemplateProps {
  queryFn: () => Promise<serviceReturnType<productType[]>>;
  queryKey?: string;
  titleTranslationKey: string;
  subLeftDownTextTranslationKey?: string;
  subRightTextTranslationKey?: string;
  rightSideButtonTextTranslationKey?: string;
  buttonOnClick?: () => void;
  displayProductNumber?: number;
  slideAble?: boolean;
  translationPageKey?: string;
}

const ProductsDisplayTemplate: React.FC<ProductsDisplayTemplateProps> = ({
  titleTranslationKey,
  subLeftDownTextTranslationKey,
  subRightTextTranslationKey,
  rightSideButtonTextTranslationKey,
  buttonOnClick,
  queryFn,
  displayProductNumber,
  queryKey = "products",
  slideAble = true,
  translationPageKey = "homePage",
}): JSX.Element => {
  const [products, setProducts] = useState<productType[]>([]);
  const { data, isPending } = useQuery({
    queryKey: [queryKey],
    queryFn,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data?.success) {
      setProducts(data?.data || []);
    }
  }, [data]);
  const t = useTranslations(translationPageKey);
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

  if (isPending) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
    <div className="w-full h-auto flex flex-col gap-[5vh]  p-[5%] ">
      <div className="flex w-full justify-between items-center  ">
        <div className=" flex flex-col gap-y-[3vh] ">
          <h1 className="text-[3vw] font-bold text-3D3D3D">
            {" "}
            {t(titleTranslationKey)}{" "}
          </h1>
          {subLeftDownTextTranslationKey && (
            <p className=" text-666666 text-base v ">
              {" "}
              {t(subLeftDownTextTranslationKey)}{" "}
            </p>
          )}
        </div>
        {rightSideButtonTextTranslationKey && (
          <Button
            text={t(rightSideButtonTextTranslationKey)}
            onClick={buttonOnClick}
          />
        )}
        {subRightTextTranslationKey && (
          <p className=" text-666666 text-base v ">
            {" "}
            {t(subRightTextTranslationKey)}{" "}
          </p>
        )}
      </div>

      {slideAble ? (
        <section className="relative    ">
          <div className="embla  " ref={emblaRef}>
            <div className="embla__container  ">
              {getRandomItems(products, displayProductNumber || 8).map(
                (product: productType, index: number) => (
                  <div key={index} className="embla__slide   ">
                    <CardType2 product={product} />
                  </div>
                )
              )}
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
      ) : (
        <div className="flex flex-wrap w-full justify-evenly items-center">
          {getRandomItems(products, 8).map(
            (product: productType, index: number) => (
              <div key={index} className=" w-[23%]  p-4 flex flex-col">
                <Card
                  data={product}
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
                            (product.price *
                              (100 - product.discountPercentage)) /
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
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsDisplayTemplate;
