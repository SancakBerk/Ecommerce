import Image from "next/image";
import { motion } from "framer-motion";
interface cardProps {
  isVertical?: boolean;
  width?: string;
  discountPercentage?: number;
  bgImage: string;
  name?: string;
  className?: string;
  animated?: boolean;
}

const Card: React.FC<cardProps> = ({
  isVertical = true,
  width = `w-[300px]`,
  discountPercentage,
  bgImage,
  name,
  className,
  animated = true,
}) => {
  const aspectRatio = isVertical ? "aspect-[77/100]" : "aspect-[100/77]";

  return (
    <motion.div
      className={`${aspectRatio} ${width} ${className}  rounded-[20px] bg-gray-200  `}
    >
      <motion.div
        whileHover={animated ? { scale: 1.05 } : {}}
        whileTap={{ scale: 0.9 }}
        className={`${aspectRatio} ${width} relative p-[10%] `}
      >
        <Image
          className="w-full h-full rounded-[14px] focus:ring-0 outline-0"
          src={bgImage}
          alt="Card"
          width={900}
          height={900}
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
        {discountPercentage && (
          <div className="absolute top-[3%] left-[4%] bg-[#3D3D3D] rounded-[10px] px-3 py-1.5">
            <p className="text-white">- {discountPercentage} %</p>
          </div>
        )}
        {name && (
          <div className="absolute bottom-[3%] left-[4%] h-[10%] text-black  text-[20px]">
            {name}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
export default Card;
