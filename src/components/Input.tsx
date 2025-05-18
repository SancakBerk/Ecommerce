import { CiSearch } from "react-icons/ci";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  Icon?: React.ReactNode;
  displayIcon?: boolean;
  darkBackground?: boolean;
  borderRoundedCss?: string;
}
const CustomInput: React.FC<InputProps> = ({
  placeholder,
  type,
  value,
  onChange,
  width = "w-[350px]",
  darkBackground = true,
  displayIcon = true,
  borderRoundedCss = "rounded-[42px]",
  className,
  Icon = (
    <CiSearch className="h-2/3 w-2/3 text-white rounded-full bg-black font-bold " />
  ),
  ...props
}) => {
  return (
    <div
      className={`${width} h-14 flex justify-center items-center border-CECCCC border ${borderRoundedCss} ${
        darkBackground ? "bg-[#282828]" : "bg-white"
      }  p-2 pl-4 pr-2 gap-2 ${className} `}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full  ${
          darkBackground ? "text-CECCCC" : "text-[5F5F5F] "
        }  text-lg`}
        {...props}
      />
      {displayIcon && (
        <button
          tabIndex={-1}
          className={`h-full aspect-square rounded-full  flex justify-center items-center ${"cursor-pointer"}  ${
            darkBackground ? "bg-black" : "bg-white"
          }`}
        >
          {Icon}
        </button>
      )}
    </div>
  );
};
export default CustomInput;
