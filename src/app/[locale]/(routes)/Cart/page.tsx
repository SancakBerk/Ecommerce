"use client";
import { cartItemType } from "@/types/globalTypes";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import ProductsDisplayTemplate from "@/components/ProductDisplayTemplate";
import QuantityCounter from "@/components/QuantityCounter";
import { getCartItemsByUser, getAllProducts } from "@/services/productService";
import { calculateTotalPrice } from "@/utils/funcitons";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const CartPage = () => {
  const [cartData, setCartData] = useState<cartItemType[]>([]);
  // const router = useRouter();
  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: () =>
      getCartItemsByUser(
        1,
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlcmtzYW5jYWs2MUBob3RtYWlsLmNvbSIsImlhdCI6MTc0Nzc0NTM3OCwiZXhwIjoxNzQ3NzQ4OTc4fQ.0ffaLx7wLI74EmKfxrMneIARASBnW_W145k9LS44UgA"
      ),
  });

  const handleQuantityChange = (productId: number, quantity: number) => {
    setCartData((prev) => {
      if (!prev || prev.length === 0) return prev ?? [];
      return prev.map((item) =>
        item.product.productId === productId ? { ...item, quantity } : item
      );
    });
  };

  useEffect(() => {
    if (data && data.success) {
      setCartData(data.data as cartItemType[]);
    }
  }, [data]);
  if (!cartData || cartData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl">Sepetiniz boş...</p>
      </div>
    );
  }

  return (
    <div>
      {/* <Navbar darkText /> */}

      <div className="flex justify-center  h-[80vh] gap-[5vw] p-[5%] items-start ">
        <form className="w-[55%] h-max-[70vh] h-auto flex flex-col rounded-3xl border-2 border-[#DEDFE1]  ">
          <div className="flex justify-between w-full bg-[#A6A6A6]  px-[2vw] py-[2vh] rounded-t-xl ">
            <div className="flex items-center w-[55%] ">
              <p className="text-xl text-white ">Product</p>{" "}
            </div>
            <div className=" flex justify-between w-[45%] ">
              <p className="text-xl text-white ">Price</p>
              <p className="text-xl text-white ">Quantity</p>
              <p className="text-xl text-white ">Total</p>
            </div>
          </div>
          <div className="flex flex-col full  overflow-scroll   w-full h-full  ">
            {cartData.map((item: cartItemType, index) => {
              return (
                <div
                  className=" h-[100%] flex justify-between w-full items-center    px-[2vw] py-[2vh] rounded-xl "
                  key={index}
                >
                  <div className="flex gap-x-[1vw] items-center  w-[55%]  relative  ">
                    <button
                      type="button"
                      onClick={() => {
                        setCartData((prev) =>
                          prev.filter(
                            (cartItem) =>
                              cartItem.product.productId !==
                              item.product.productId
                          )
                        );
                      }}
                    >
                      {" "}
                      <RxCross1 />{" "}
                    </button>
                    <div className="relative aspect-square w-[80px]">
                      <Image
                        src={item.product.imageUrl[0]}
                        alt="productImage"
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-xl"
                      />
                    </div>

                    <p className="text-xl text-[#949494] ">
                      {item.product.name}
                    </p>
                  </div>
                  <div className=" flex justify-between items-center  w-[45%] h-full   ">
                    <p className="text-xl text-[#949494]  ">
                      TL {item.product.price}
                    </p>
                    <QuantityCounter
                      className="w-[30%]  "
                      defaultValue={item.quantity}
                      onQuantityChange={(newQuantity) => {
                        handleQuantityChange(
                          item.product.productId,
                          newQuantity
                        );
                      }}
                      stock={item.product.stock}
                    />
                    <p className="text-xl text-[#949494]">
                      TL {(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </form>
        <form className="w-[30%] h  flex flex-col bg-[#F9F9F9] border-[#DEDFE1] border-2   rounded-2xl ">
          <div className="flex justify-between w-full bg-[#A6A6A6]  px-[2vw] py-[2vh] rounded-t-xl ">
            <p className="text-xl text-white ">Cart Total</p>
          </div>
          <div className="flex justify-between  ">
            <div className="  border-b-2 border-[#D7D7D7] justify-between flex px-[1vw] py-[3vh] w-full ">
              <div className="w-1/2 text-3D3D3D ">
                <p className="  ">SUBTOTAL</p>
              </div>
              <p className="text-[#949494] ">
                {" TL "}
                {calculateTotalPrice(true, cartData)}{" "}
              </p>
            </div>
          </div>{" "}
          <div className="flex justify-between  ">
            <div className="  border-b-2 border-[#D7D7D7] justify-between flex px-[1vw] py-[3vh] w-full ">
              <div className="w-1/2 text-3D3D3D ">
                <p>DISCOUNT</p>
              </div>
              <p className="text-[#949494] "> {"--- "}</p>
            </div>
          </div>
          <div className="flex justify-between  ">
            <div className="  border-b-2 border-[#D7D7D7] justify-between flex px-[1vw] py-[3vh] w-full ">
              <div className="w-1/2 text-3D3D3D uppercase ">
                <p>Total</p>
              </div>
              <p className="text-[#949494] ">
                {" TL "}
                {calculateTotalPrice(true, cartData)}{" "}
              </p>
            </div>
          </div>
          <Button
            type="button"
            text="Proceed To Checkout"
            width="w-full"
            disableScaleAnimation
            className=" rounded-b-2xl  h-[8vh] "
            onClick={() => {
              // router.push("/Checkout");
            }}
            removeIcons
          />
        </form>
      </div>
      <ProductsDisplayTemplate
        translationPageKey="productDetailPage"
        titleTranslationKey="similarProducts"
        queryFn={getAllProducts}
        queryKey="product"
      />
      <Footer />
    </div>
  );
};
export default CartPage;
