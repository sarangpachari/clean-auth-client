import React, { useContext, useEffect } from "react";
import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegisterForm";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { loadingContext } from "../../stores/AuthContext";
import AuthLoader from "../../components/loaders/AuthLoader";

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type") || "login";
  const handleTabSwitch = (tab) => {
    setSearchParams({ type: tab });
  };
  const { loading } = useContext(loadingContext);
  useEffect(()=>{

  },[loading])
  

  return (
    <>
      <section>
        {loading ? (
          <AuthLoader/>
        ) : (
          <div className="w-full h-lvh flex flex-col justify-center items-center gap-4">
            <div className="w-3/4 flex flex-col gap-6">
              <div className="flex gap-4 w-full">
                <button
                  className={clsx("px-4 py-2", {
                    "text-slate-600 border-b-2 border-slate-600":
                      type === "login",
                    "text-slate-300": type === "register",
                  })}
                  onClick={() => handleTabSwitch("login")}
                >
                  SIGN IN
                </button>
                <button
                  className={clsx("px-4 py-2", {
                    "text-slate-600 border-b-2 border-slate-600":
                      type === "register",
                    "text-slate-300": type === "login",
                  })}
                  onClick={() => handleTabSwitch("register")}
                >
                  SIGN UP
                </button>
              </div>
              <AnimatePresence mode="wait">
                {type === "login" ? (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                  >
                    <LoginForm />
                  </motion.div>
                ) : (
                  <motion.div
                    key="register"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4 }}
                  >
                    <RegisterForm />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Auth;
