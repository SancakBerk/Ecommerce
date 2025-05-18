import { motion } from "motion/react";
import { FC } from "react";
import { FaAngleRight } from "react-icons/fa6";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
  text: string;
  className?: string;
  width?: string;
  lightMode?: boolean;
  removeIcons?: boolean;
  disableScaleAnimation?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  width = "w-[200px]",
  lightMode = false,
  removeIcons = false,
  disableScaleAnimation = false,
  className = "",
  ...props
}) => {
  return (
    <motion.button
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      className={`flex items-center justify-evenly ${
        lightMode
          ? "bg-white text-[#282828] border-2 border-[#282828] font-bold"
          : "bg-[#282828] text-white hover:bg-[#3D3D3D]"
      } ${className} p-4 ${width} h-[4vh]  transition duration-300 ease-in-out `}
      whileHover={disableScaleAnimation ? {} : { scale: 1.05 }}
      whileTap={{ scale: 0.5 }}
    >
      <p>{text}</p>
      {removeIcons ? null : <FaAngleRight className="text-[1.5rem]" />}
    </motion.button>
  );
};

export default Button;
