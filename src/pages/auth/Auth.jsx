import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegisterForm";
import { useSearchParams } from "react-router-dom";

const Auth = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const type  = searchParams.get("type") || "login" ;
  const handleTabSwitch = (tab) => {
    setSearchParams({type :tab})
  };
  return (
    <>
    <button onClick={()=>handleTabSwitch("login")}>SIGN IN</button>
    <button onClick={()=>handleTabSwitch("register")}>SIGN UP</button>
      {type === "login" ? <LoginForm /> : <RegisterForm />}
    </>
  );
};

export default Auth;
