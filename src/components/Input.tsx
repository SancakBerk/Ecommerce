import { CiSearch } from "react-icons/ci";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
}
const CustomInput: React.FC<InputProps> = ({
  placeholder,
  type,
  value,
  onChange,
  width = "w-[350px]",
}) => {
  return (
    <div
      className={`${width} h-14 flex justify-center items-center border-CECCCC border rounded-[42px] bg-[#282828] p-2 pl-4 pr-2 gap-2`}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full  text-CECCCC text-lg "
      />
      <button className="h-full aspect-square rounded-full bg-black flex justify-center items-center cursor-pointer">
        <CiSearch className="h-2/3 w-2/3 text-white rounded-full bg-black font-bold " />
      </button>
    </div>
  );
};
export default CustomInput;
