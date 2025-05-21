import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import LoginAndSignUpForm from "./components/loginAndSignUpForm";

const LoginPage:React.FC = () => {
    return (
      <div>
        <Navbar darkText />
        <LoginAndSignUpForm />
        <Footer />
      </div>
    );

}
export default LoginPage;