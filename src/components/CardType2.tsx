import { productType } from "@/types/globalTypes";
import Card from "./Card";
import { JSX } from "react";
import { motion } from "motion/react";
import { LuCirclePlus } from "react-icons/lu";

interface CardType2Props {
  product: productType;
}

const CardType2: React.FC<CardType2Props> = ({ product }): JSX.Element => {
  return (
    <div>
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
          <div className="flex justify-between items-center h-[40px] ">
            <div className="flex items-center gap-x-4 h-full">
              <p className=" line-through text-[#404040] ">
                {"TL "}
                {product.price}
              </p>
              <p className="font-bold">
                {"TL "}
                {(
                  (product.price * (100 - product.discountPercentage)) /
                  100
                ).toFixed(2)}
              </p>
            </div>
            <motion.button
              className="  h-full  w-auto  flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {" "}
              <LuCirclePlus size={30} className="h-full " />
            </motion.button>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <p className="font-bold">
              {"TL "}
              {product.price}
            </p>
            <motion.button
              className="  h-full  w-auto  flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {" "}
              <LuCirclePlus size={30} className="h-full " />
            </motion.button>
          </div>
        )}{" "}
      </div>
    </div>
  );
};

export default CardType2;
