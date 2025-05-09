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

const Button: FC<ButtonProps> = ({ text, width = "w-[200px]", ...props }) => {
  return (
    <motion.button
      onClick={props.onClick}
      className={`flex items-center justify-evenly bg-[#282828] text-white rounded-[64px] p-4 ${width} h-[4vh] hover:bg-[#3D3D3D] transition duration-300 ease-in-out `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.5 }}
    >
      <p>{text}</p>
      <FaAngleRight size={24} />
    </motion.button>
  );
};

export default Button;
