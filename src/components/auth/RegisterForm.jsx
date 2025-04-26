import React, { useContext, useState } from "react";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { loadingContext } from "../../stores/AuthContext";
import { registerUserAPI } from "../../services/auth/authAPI";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
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

  const registerSchema = z
    .object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z.string().min(6, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = registerSchema.safeParse(formData);

    if (!validation.success) {
      setError(validation.error.errors[0].message);
      return;
    }

    const { name, email, password } = validation.data;
    const reqBody = { name, email, password };

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const result = await registerUserAPI(reqBody);
      if (result.status === 200) {
        handleLoading();
        navigate("/");
      }
      if (result.status === 500) {
        alert(result.response.data.error);
        navigate("/auth");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setError("");
    }
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
          <div className="md:w-full flex flex-col gap-8">
            <div className="flex gap-4 xl:flex-row flex-col">
              <input
                type="text"
                required
                placeholder="Full name"
                onChange={(e) => handleChange(e, "name")}
                className="w-full bg-red-50 md:p-4 p-2 border-s-2 rounded border-s-slate-500 focus:border-s-red-600 focus:outline-none focus:ring-0"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                onChange={(e) => handleChange(e, "email")}
                className="w-full bg-red-50 md:p-4 p-2 border-s-2 rounded border-s-slate-500 focus:border-s-red-600 focus:outline-none focus:ring-0"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
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
                  required
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
