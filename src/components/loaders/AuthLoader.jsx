import React from "react";
import { Triangle } from "react-loader-spinner";

const AuthLoader = () => {
  return (
    <>
      <div className="w-full h-lvh flex items-center justify-center">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#dc2626"
          ariaLabel="traingle-loading"
        />
      </div>
    </>
  );
};

export default AuthLoader;
