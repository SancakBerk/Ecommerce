"use client";
import Navbar from "@/components/Navbar";

import React, { JSX } from "react";
import HeaderContainer from "./components/HeaderContainer";
import FeaturedProducts from "./components/FaturedProducts";
import { motion, useScroll, useSpring } from "framer-motion";
import Categories from "./components/Categories";
import PopulerProducts from "./components/PopulerProducts";
import LatestOnGoings from "./components/LatestOngoings";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Footer from "@/components/Footer";

const HomePage = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="w-screen  overflow-x-hidden flex flex-col  gap-[3vh] ">
      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
        }}
        className="fixed top-0 left-0 h-1 bg-green-700 w-full z-50"
      />
      <Navbar />
      <HeaderContainer />
      <FeaturedProducts />
      <Categories />
      <PopulerProducts />
      <LatestOnGoings />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  );
};

export default HomePage;
