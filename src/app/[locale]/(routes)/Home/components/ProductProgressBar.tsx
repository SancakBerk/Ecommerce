"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
interface ProductProgressBarProps {
  currentCount: number;
  totalCount: number;
}

const ProductProgressBar: React.FC<ProductProgressBarProps> = ({
  currentCount,
  totalCount,
}) => {
  const percentage = (currentCount / totalCount) * 100;

  const t = useTranslations("productPage");
  return (
    <div className="w-full mt-4 ">
      <p className="text-center text-sm text-414141 mt-2 mb-4">
        {t("showing")} {currentCount} {t("of")} {totalCount} {t("items")}{" "}
      </p>
      <div className="relative w-full h-[2px] bg-[#DFDFDF] overflow-hidden">
        <motion.div
          className="absolute h-full bg-black"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default ProductProgressBar;
