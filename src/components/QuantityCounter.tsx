"use client";
import React, { useEffect } from "react";
import { JSX, useState } from "react";

interface ProductData extends React.HTMLProps<HTMLDivElement> {
  defaultValue?: number;
  stock: number;
  onQuantityChange: (quantity: number) => void;
}

const QuantityCounter: React.FC<ProductData> = ({
  defaultValue = 1,
  stock,
  onQuantityChange,
  ...props
}): JSX.Element => {
  const [productCounter, setproductCounter] = useState<number>(defaultValue);

  useEffect(() => {
    onQuantityChange(productCounter);
  }, [productCounter]);

  return (
    <div
      {...props}
      className={`flex h-[50px] w-[100px] justify-evenly border-[#D7D7D7] border-2 items-center rounded-3xl ${props.className}`}
    >
      <button
        type="button" // Varsayılan submit davranışını engeller
        className="h-[3vh] w-[1vw] cursor-pointer"
        onClick={() => {
          if (productCounter > 1) {
            setproductCounter(productCounter - 1);
          }
        }}
      >
        <p className="text-[#414141]">-</p>
      </button>
      <p className="font-bold">{productCounter}</p>
      <button
        type="button" // Varsayılan submit davranışını engeller
        className="h-[3vh] w-[1vw] cursor-pointer"
        onClick={() => {
          if (productCounter < stock) {
            setproductCounter(productCounter + 1);
          }
        }}
      >
        <p className="text-[#414141]">+</p>
      </button>
    </div>
  );
};

export default QuantityCounter;
