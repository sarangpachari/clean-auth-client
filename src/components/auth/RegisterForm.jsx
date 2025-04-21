import React from "react";

const RegisterForm = () => {
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
          <div className="flex gap-4 md:flex-row flex-col w-full">
            <input
              type="email"
              placeholder="Email address"
              className="max-w-72 md:p-4 p-2 border-s-2 rounded border-s-slate-500 focus:border-s-red-600 focus:outline-none focus:ring-0"
            />
            <input
              type="password"
              placeholder="Password"
              className="max-w-72 md:p-4 p-2 border-s-2 rounded border-s-slate-500 focus:border-s-red-600 focus:outline-none focus:ring-0"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="max-w-72 md:p-4 p-2 border-s-2 rounded border-s-slate-500 focus:border-s-red-600 focus:outline-none focus:ring-0"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
