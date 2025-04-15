import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

type AccordionProps = {
  title: string;
  content: string;
  isopen?: boolean;
};

export const Accordion = ({
  title,
  content,
  isopen = false,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(isopen);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`border rounded-sm cursor-pointer p-4 transition-colors duration-300 ${
        isOpen ? "bg-gray-100" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center text-[#666666]">
        <h3 className="font-medium">{title}</h3>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden mt-2"
          >
            <p className="text-sm text-[#666666]">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
