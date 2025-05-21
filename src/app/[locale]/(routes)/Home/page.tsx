"use client";
import Navbar from "@/components/Navbar";

import React, { JSX } from "react";
import HeaderContainer from "./components/HeaderContainer";
import { motion, useScroll, useSpring } from "framer-motion";
import Categories from "./components/Categories";

import LatestOnGoings from "./components/LatestOngoings";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Footer from "@/components/Footer";
import Proportions from "./components/Propotions";
import ProductsDisplayTemplate from "@/components/ProductDisplayTemplate";
import { createCategory, getAllProducts } from "@/services/productService";
import { additionalDummyCategories } from "@/utils/constants";

const HomePage = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="w-screen  overflow-x-hidden flex flex-col   relative ">
      <motion.div
        style={{
          scaleX,

          transformOrigin: "0%",
        }}
        className="fixed top-0 left-0 h-1 bg-green-700 w-full z-50"
      />
      <Navbar />
      <HeaderContainer />
      {/* <button onClick={createDummyData}>10 Ürün Oluştur</button> */}
      <ProductsDisplayTemplate
        queryFn={getAllProducts}
        titleTranslationKey={"featuredProducts"}
        subRightTextTranslationKey={"featuredProductsSubText"}
        buttonOnClick={() => {}}
        queryKey="products"
        displayProductNumber={8}
      />
      <Categories />
      <ProductsDisplayTemplate
        queryFn={getAllProducts}
        queryKey="products"
        titleTranslationKey={"mostPopularProducts"}
        subLeftDownTextTranslationKey={"mostPopularProductsSubText"}
        rightSideButtonTextTranslationKey={"viewAll"}
        buttonOnClick={() => {}}
        slideAble={false}
      />
      <Proportions />
      <LatestOnGoings />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  );
};

export default HomePage;
