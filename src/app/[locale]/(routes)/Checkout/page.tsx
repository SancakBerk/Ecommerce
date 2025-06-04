"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { getCartItemsByUser } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";
import { JSX, useEffect, useState } from "react";
import { useFormik } from "formik";
import { personalBillingConfirmation } from "@/utils/formatSchemas";
import { cartItemType } from "@/types/globalTypes";
import Footer from "@/components/Footer";
import {
  calculateTotalPrice,
  getTokenFromLocalStorage,
  getUserIdFromLocalStorage,
} from "@/utils/funcitons";
import Navbar from "@/components/Navbar";

const Checkout = (): JSX.Element => {
  const [cartData, setCartData] = useState<cartItemType[]>([]);
  const { data, isPending } = useQuery({
    queryKey: ["cart"],
    queryFn: () =>
      getCartItemsByUser(
        getUserIdFromLocalStorage(),
        getTokenFromLocalStorage()
      ),
  });

  const renderInputElementCustom = (id: string): JSX.Element => {
    const isTouched = formik.touched[id as keyof typeof formik.touched];
    const hasError = formik.errors[id as keyof typeof formik.errors];
    return (
      <Input
        id={id}
        name={id}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values[id as keyof typeof formik.values]}
        borderRoundedCss="rounded-[10px]"
        width="w-full "
        darkBackground={false}
        displayIcon={false}
        className={`w-full ${isTouched && hasError ? "border-red-500" : ""}`}
      />
    );
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      streetAdress: "",
      townCity: "",
      country: "",
      postalCode: "",
    },
    validationSchema: personalBillingConfirmation,
    onSubmit: (test) => {
      // Handle form submission here
      console.log("Form submitted", test);
    },
  });

  useEffect(() => {
    if (data?.success && data.data) {
      setCartData(data.data);
    }
  }, [data]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar darkText />
      <div className=" flex p-[5%] gap-[3vw]  items-start ">
        <form
          className="w-[50%] h-[70vh] flex flex-col rounded-3xl border-2 border-[#DEDFE1]  "
          onSubmit={formik.handleSubmit}
        >
          <div className="flex justify-between w-full bg-[#A6A6A6]  px-[2vw] py-[2vh] rounded-xl ">
            <p className="text-xl text-white ">Personal</p>
            <p className="text-xl text-white ">Billing</p>
            <p className="text-xl text-white ">Confirmation</p>
          </div>
          <div className="flex flex-col full justify-center  gap-5 w-full h-full p-[5%]">
            <div className="flex w-full justify-between gap-[2vw]  ">
              <div className="w-1/2 flex flex-col gap-2 justify-center ">
                <p>First Name * </p>
                {renderInputElementCustom("firstName")}
              </div>
              <div className="w-1/2 flex flex-col gap-2 justify-center  ">
                <p>Last Name</p>
                {renderInputElementCustom("lastName")}
              </div>
            </div>
            <div className="flex w-full justify-between gap-[2vw]  ">
              <div className="w-1/2 flex flex-col gap-2 justify-center ">
                <p>Email Adress * </p>
                {renderInputElementCustom("email")}
              </div>
              <div className="w-1/2 flex flex-col gap-2 justify-center  ">
                <p>Phone Number</p>
                {renderInputElementCustom("phoneNumber")}
              </div>
            </div>
            <div className=" flex flex-col  gap-2">
              <p>Street Adress</p>
              {renderInputElementCustom("streetAdress")}
            </div>

            <div className=" flex flex-col  gap-2">
              <p>Town/City</p>
              {renderInputElementCustom("townCity")}
            </div>
            <div className=" flex flex-col  gap-2">
              <p>Country</p>
              {renderInputElementCustom("country")}
            </div>
            <div className=" flex flex-col  gap-2">
              <p>PostCode Zip</p>
              {renderInputElementCustom("postalCode")}
            </div>
            <Button text="Proceed to Next Step" removeIcons type="submit" />
          </div>
        </form>
        <form className="w-[30%]  flex flex-col bg-[#F9F9F9] border-[#DEDFE1] border-2   rounded-3xl ">
          <div className="flex justify-between w-full bg-[#A6A6A6]  px-[2vw] py-[2vh] rounded-xl ">
            <p className="text-xl text-white ">Cart Details</p>
          </div>
          <div className="border-b-2 border-[#DEDFE1]  border-dashed flex px-[1vw] py-[3vh] ">
            <div className="w-1/2 text-3D3D3D ">
              <p>Product</p>
            </div>
            <div className="w-1/2 flex justify-evenly text-3D3D3D ">
              <p className="w-1/2 text-center">Quantity</p>
              <p className="w-1/2 text-end">SubTotal</p>
            </div>
          </div>
          <div className=" flex flex-col gap-[2vh]  border-b-2 border-[#DEDFE1]  border-dashed px-[1vw] py-[3vh] ">
            {cartData.map((eachCartItem: cartItemType, key) => {
              return (
                <div
                  key={key}
                  className="flex justify-between   text-[#949494] "
                >
                  <div className="w-1/2 text-3D3D3D ">
                    <p> {eachCartItem.product.name} </p>
                  </div>
                  <div className="w-1/2 flex justify-evenly text-3D3D3D  ">
                    <p className="w-1/2 text-center">
                      {" "}
                      {eachCartItem.quantity}{" "}
                    </p>
                    <div className="flex justify-end items-end w-1/2">
                      <p className="w-full text-end">
                        {"TL "}
                        {(
                          eachCartItem.product.price * eachCartItem.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between  ">
            <div className="border-b-2 border-[#DEDFE1]  border-dashed justify-between flex px-[1vw] py-[3vh] w-full ">
              <div className="w-1/2 text-3D3D3D ">
                <p>SubTotal</p>
              </div>
              <p className="text-[#949494] ">
                {" "}
                {"TL "}
                {calculateTotalPrice(false, cartData)}
              </p>
            </div>
          </div>
          <div className="flex justify-between  ">
            <div className="border-b-2 border-[#DEDFE1]  border-dashed justify-between flex px-[1vw] py-[3vh] w-full ">
              <div className="w-1/2 text-3D3D3D ">
                <p>Shipping</p>
              </div>
              <p className="text-[#949494] "> {"TL "}100</p>
            </div>
          </div>
          <div className="flex justify-between  ">
            <div className="  border-dashed justify-between flex px-[1vw] py-[3vh] w-full ">
              <div className="w-1/2 text-3D3D3D ">
                <p>Total</p>
              </div>
              <p className="text-[#949494] ">
                {" "}
                {"TL "}
                {calculateTotalPrice(true, cartData)}
              </p>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
