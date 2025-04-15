"use client";
import Navbar from "@/components/Navbar";

import React, { JSX } from "react";
import HeaderContainer from "./components/HeaderContainer";
import FeaturedProducts from "./components/FaturedProducts";
import { motion, useScroll, useSpring } from "framer-motion";

const HomePage = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="w-screen  overflow-x-hidden ">
      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
        }}
        className="fixed top-0 left-0 h-1 bg-green-500 w-full z-50"
      />
      <Navbar />
      <HeaderContainer />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
