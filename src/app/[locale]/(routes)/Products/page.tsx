import Footer from "@/components/Footer";
import { JSX } from "react";
import Products from "./components/Products";
import Navbar from "@/components/Navbar";

const ProductPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-screen relative">
      <Navbar darkText={true} />
      <Products />
      <Footer />
    </main>
  );
};

export default ProductPage;
