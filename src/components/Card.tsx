import Image from "next/image";
import { motion } from "framer-motion";
import { categoryType, productType } from "@/types/globalTypes";
import { useRouter } from "next/navigation";
import { isCategory, isProduct } from "@/utils/funcitons";

interface cardProps {
  isVertical?: boolean;
  width?: string;
  discountPercentage?: number;
  data: productType | categoryType;
  className?: string;
  animated?: boolean;
  animateDuration?: number;
}

const Card: React.FC<cardProps> = ({
  isVertical = true,
  width = `w-[300px]`,
  discountPercentage,
  data,
  className,
  animated = true,
  animateDuration,
}) => {
  const aspectRatio = isVertical ? "aspect-[77/100]" : "aspect-[100/77]";
  const router = useRouter();
  const imageSrc = isProduct(data)
    ? data.imageUrl?.[0]
    : isCategory(data)
    ? data.imageUrl
    : null;
  return (
    <motion.button
      className={`${aspectRatio} ${width} ${className}  rounded-[20px] bg-gray-200 `}
      onClick={() => {
        if (isProduct(data)) {
          router.push(`/Product/${data.productId}`);
        } else if (isCategory(data)) {
          router.push(`/Category/${data.categoryId}`);
        }
      }}
    >
      <motion.div className={`${aspectRatio} ${width} relative p-[10%]  `}>
        <motion.div
          className="w-full h-full  "
          whileHover={animated ? { scale: 1.05 } : {}}
          transition={{
            duration: animateDuration,
          }}
          whileTap={{ scale: 0.9 }}
        >
          {imageSrc && (
            <Image
              className="w-[20vw] h-full rounded-[14px] focus:ring-0 outline-0"
              src={imageSrc}
              alt="Card"
              width={900}
              height={900}
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          )}
        </motion.div>
        {discountPercentage && (
          <div className="absolute top-[3%] left-[4%] bg-[#3D3D3D] rounded-[10px] px-3 py-1.5">
            <p className="text-white">- {discountPercentage} %</p>
          </div>
        )}
        {data?.name && (
          <div className="absolute bottom-[1%] left-[4%] h-[auto] text-black  text-[20px]">
            {data.name}
          </div>
        )}
      </motion.div>
    </motion.button>
  );
};
export default Card;
