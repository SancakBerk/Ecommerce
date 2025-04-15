"use client";
import { JSX, useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import { products } from "../../../../../utils/constants";
import { Product } from "@/app/types/homePageTypes";
import Card from "@/components/Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const FeaturedProducts = (): JSX.Element => {
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
    <div className="w-full h-auto flex flex-col gap-[10vh] ">
      <div className=" px-[4%]">
        <div className="flex items-center justify-between  ">
          <p className="text-[#3D3D3D] text-[50px]  ">
            {t("featuredProducts")}
          </p>
          <p className="text-[#666666] text-lg w-1/4 ">
            {t("featuredProductsSubText")}
          </p>
        </div>

        <section className="relative  ">
          <div className="embla " ref={emblaRef}>
            <div className="embla__container  ">
              {products.map((product: Product, index: number) => (
                <div key={index} className="embla__slide  ">
                  <Card
                    name={product.name}
                    bgImage={product.imageUrl}
                    discountPercentage={13}
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
      </div>
    </div>
  );
};

export default FeaturedProducts;
