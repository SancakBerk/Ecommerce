import { motion } from "motion/react";
import { FC } from "react";
import { FaAngleRight } from "react-icons/fa6";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
  text: string;
  className?: string;
  width?: string;
}

const Button: FC<ButtonProps> = ({ text, width = "w-[250px]" }) => {
  return (
    <motion.button
      className={`flex items-center justify-evenly bg-[#282828] text-white rounded-[64px] p-4 ${width} hover:bg-[#3D3D3D] transition duration-300 ease-in-out`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <p>{text}</p>
      <FaAngleRight size={24} />
    </motion.button>
  );
};

export default Button;
