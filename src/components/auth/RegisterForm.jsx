import React, { useContext, useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { loadingContext } from "../../stores/AuthContext";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({});
  const { setLoading } = useContext(loadingContext);
  const handlePasswordToggle = () => setShowPassword(!showPassword);
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
  const handleChange = (e, name) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    console.log("Submitted");
    handleLoading();
    console.log(formData);
  };
  return (
    <>
      <section>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="md:text-6xl text-4xl">
              Get Started <span className="text-red-700">Now</span>.
            </h1>
            <p className="text-slate-500 text-sm md:text-lg">
              Sign up to unlock a seamless and organized way to manage your
              tasks. It's quick and easy!
            </p>
          </div>
          <div className="md:w-2/3 flex flex-col gap-8">
            <div className="flex gap-4 xl:flex-row flex-col">
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) => handleChange(e, "email")}
                className="w-full bg-red-50 md:p-4 p-2 border-s-2 rounded border-s-slate-500 focus:border-s-red-600 focus:outline-none focus:ring-0"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => handleChange(e, "password")}
                  className="w-full xl:w-max xl:max-w-72 bg-red-50 md:p-4 p-2 border-s-2 rounded border-s-slate-500 focus:border-s-red-600 focus:outline-none focus:ring-0"
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={handlePasswordToggle}
                >
                  {showPassword ? <IoEye /> : <IoEyeOffOutline />}
                </div>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChange={(e) => handleChange(e, "confirmPassword")}
                  className="w-full xl:w-max xl:max-w-72 bg-red-50 md:p-4 p-2 border-s-2 rounded border-s-slate-500 focus:border-s-red-600 focus:outline-none focus:ring-0"
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={handlePasswordToggle}
                >
                  {showPassword ? <IoEye /> : <IoEyeOffOutline />}
                </div>
              </div>
            </div>
            {error && (
              <div className="">
                <span className="text-red-600 text-sm">{error}</span>
              </div>
            )}
            <div className="flex w-full">
              <motion.button
                initial="initial"
                whileHover="hover"
                onClick={handleSubmit}
                className="flex items-center border-b-2 text-red-700 font-medium p-2 rounded border-red-700 cursor-pointer"
              >
                <span>Go</span>
                <motion.span
                  variants={{
                    initial: {
                      marginLeft: 8,
                    },
                    hover: {
                      marginLeft: 16,
                    },
                  }}
                >
                  <GoArrowRight size={24} />
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
