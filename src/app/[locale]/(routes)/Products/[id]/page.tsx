"use client";
import { productDetailsType } from "@/types/globalTypes";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductsDisplayTemplate from "@/components/ProductDisplayTemplate";
import { getProducts, getProductById } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { JSX } from "react";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { LuTruck } from "react-icons/lu";
import Button from "@/components/Button";
import { GiDeliveryDrone } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaStarHalf, FaStar } from "react-icons/fa";
import { use } from "react";

const ProductDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [productData, setproductData] = useState<productDetailsType>();
  const [productCounter, setproductCounter] = useState<number>(1);
  const [bigPictureUrl, setBigPictureUrl] = useState<string>(
    productData ? productData.imageUrl[0] : ""
  );
  const [selectedTabIndex, setselectedTabIndex] = useState<number>(0);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const { id } = use(params);
  const t = useTranslations("productDetailPage");
  const { data, isPending } = useQuery({
    queryKey: ["productById", id],
    queryFn: () => getProductById(parseInt(id)),
  });

  const returnStars = (stars: number): JSX.Element => {
    return (
      <div className=" gap-1 flex justify-center items-center">
        {Array.from({ length: stars }, (_, index) => (
          <FaStar key={index} className="text-[#A6A6A6] text-[1vw]" />
        ))}
        {stars % 1 !== 0 && (
          <FaStarHalf className="text-[#A6A6A6] text-[1vw]" />
        )}
      </div>
    );
  };

  useEffect(() => {
    if (data?.success && data.data) {
      setproductData(data.data as productDetailsType);
      setBigPictureUrl(data.data.imageUrl[0]);
    }
  }, [data]);

  if (isPending || !productData) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-screen flex flex-col">
      <Navbar darkText={true} />

      <div className="flex flex-col w-full h-[80vh] p-[5%] ">
        <div className="flex  gap-x-4">
          <p className="text-[#7B7B7B] ">
            {t("productDetailBreadcrumbListing")}{" "}
          </p>
          <FaAngleRight className="text-[#7B7B7B] " />
          <p className="text-414141">{t("productDetailBreadcrumbCurrent")} </p>
        </div>
        <div className="flex h-full w-full gap-[5vw] ">
          {/* Images */}
          <div className="flex w-[50%] h-full ">
            {/* vertical Images*/}
            <div className="flex flex-col gap-4 w-[20%] h-full">
              {productData?.imageUrl
                .slice(0, 3)
                .map((eachProductImage, index) => {
                  return (
                    <motion.div
                      className=" h-[30%]  flex justify-center items-center cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      key={index}
                      onClick={() => {
                        setBigPictureUrl(eachProductImage);
                      }}
                    >
                      <Image
                        src={eachProductImage}
                        alt={eachProductImage}
                        width={100}
                        height={100}
                      />
                    </motion.div>
                  );
                })}{" "}
            </div>
            {/* Big Image */}
            <div className="w-[80%] h-full  flex justify-center items-center relative ">
              <Image
                objectFit="contain"
                src={bigPictureUrl}
                alt={bigPictureUrl}
                fill
              />
            </div>
          </div>
          {/* Information */}
          <div className="flex flex-col justify-evenly  w-[40%] ">
            <div className="flex justify-between items-center">
              <h1 className="text-[2vw] "> {productData.name} </h1>

              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <CiHeart className="text-[2vw] hover:text-red-400 cursor-pointer " />
              </motion.button>
            </div>
            <div className=" flex gap-x-[1vw]   text-[1vw]">
              <p> ${productData.price} </p>
              <div className="border-l-[#A6A6A6] border-l-2 flex pl-[1vw] justify-center  items-center">
                {returnStars(productData.averageStars)}{" "}
                <p className="text-414141 pl-[1vw] ">
                  {`(${productData.reviews.length} review)`}{" "}
                </p>
              </div>
            </div>
            <div className="  border-t-2 border-3D3D3D text-414141 ">
              <p className="text-7B7B7B p-2">{productData.description}</p>
              <li> {t("productFeature1")} </li>
              <li> {t("productFeature2")} </li>
              <li> {t("productFeature3")} </li>
            </div>
            <div className="flex flex-col gap-[2vh]">
              <div className="flex justify-between items-center h-full gap-x-[1vw] ">
                <div className=" flex h-full  justify-evenly  w-[15%] border-[#D7D7D7] border-2   items-center rounded-3xl">
                  <button
                    className="h-[3vh] w-[1vw]  "
                    onClick={() => {
                      if (productCounter > 1) {
                        setproductCounter(productCounter - 1);
                      }
                    }}
                  >
                    <p>-</p>
                  </button>
                  {productCounter}
                  <button
                    className="h-[3vh] w-[1vw]"
                    onClick={() => {
                      if (productCounter < productData.stock) {
                        setproductCounter(productCounter + 1);
                      }
                    }}
                  >
                    <p>+</p>
                  </button>
                </div>
                <Button
                  text={t("productAddToCart")}
                  removeIcons
                  width="w-full "
                />
              </div>
              <Button
                text={t("productBuyNow")}
                lightMode
                removeIcons
                width="w-full"
              />
            </div>
            <div className="flex gap-4 items-center text-414141">
              <LuTruck className="text-2xl text-414141" />
              <p> {t("productShippingFree")} </p>
            </div>
            <div className="flex gap-4 items-center text-414141">
              <GiDeliveryDrone className="text-2xl" />
              <p> {t("productDelivery")} </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8F8] flex flex-col w-full h-auto p-[5%] ">
        <div className=" flex gap-x-[1vw] ">
          <button
            onClick={() => {
              setselectedTabIndex(0);
            }}
            className={`${
              selectedTabIndex == 0 ? "font-bold" : ""
            } text-[#696969] `}
          >
            {" "}
            Description
          </button>
          <button
            onClick={() => {
              setselectedTabIndex(1);
            }}
            className={`${
              selectedTabIndex == 1 ? "font-bold" : ""
            } border-l-2  pl-[1vw] text-[#696969] `}
          >
            Reviews
          </button>
        </div>

        {selectedTabIndex == 1 ? (
          <div className="flex flex-col gap-[2vh] h-full  mt-[2vh] w-full">
            {productData.reviews.map((review, index) => (
              <div
                className="flex  items-center text-414141 border-2 border-[#D3D3D3]  p-[2vh] rounded-2xl relative  w-full"
                key={index}
              >
                <div className="h-[5vh]  w-[5vw] relative ">
                  <Image
                    src={review.userImageUrl}
                    alt={review.userImageUrl}
                    fill
                    objectFit="contain"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full ">
                  <div className="flex justify-between items-center w-full">
                    <p>{review.userName}</p>
                    {returnStars(review.givenStars)}
                  </div>
                  <p className="text-[#949494] ">{review.reviewText}</p>
                  <div className=" flex gap-[0.5vw] text-[#3D3D3D] mt-[1vh]  ">
                    <motion.button className="flex justify-center items-center">
                      <CiHeart className=" hover:text-red-400 cursor-pointer  text-xl  " />{" "}
                      <p> {`(${review.reviewLikes})`} </p>
                    </motion.button>
                    <motion.button>
                      <p>Reply</p>
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}

            {/* Review form */}
            <div className=" mx-auto w-full p-6 rounded-lg border border-gray-200 bg-[#F2F2F2] ">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full p-2 rounded-full border border-gray-300 text-sm"
                    />
                    <input
                      type="email"
                      placeholder="person@gmail.com"
                      className="w-full p-2 rounded-full border border-gray-300 text-sm"
                    />
                  </div>
                </div>
              </div>

              <textarea
                placeholder="Write your review..."
                className="w-full p-3 rounded-lg border border-gray-300 text-sm mb-4 h-28"
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-sm text-gray-700">
                  <span>Your Ratings:</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`w-5 h-5 cursor-pointer transition ${
                        (hoverRating || rating) >= star
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      fill={
                        (hoverRating || rating) >= star ? "#facc15" : "none"
                      }
                    />
                  ))}
                </div>

                <Button text="Post Review" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-[2vh] h-full  mt-[2vh] w-full">
            {" "}
            <p className="text-[#575757] ">{productData.description}</p>
          </div>
        )}
      </div>

      <ProductsDisplayTemplate
        translationPageKey="productDetailPage"
        titleTranslationKey="similarProducts"
        queryFn={getProducts}
        queryKey="product"
        displayProductNumber={4}
      />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
