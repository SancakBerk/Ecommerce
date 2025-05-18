import Navbar from "@/components/Navbar";
import React from "react";

interface layoutInterface extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const layout: React.FC<layoutInterface> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar darkText />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default layout;
