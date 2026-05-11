import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen grid place-content-center mx-auto">
      <div className="flex gap-4">
        <h1 className="text-3xl font-bold text-[#2F3A3D]">Loading...</h1>
        <span className="loading loading-ring loading-xl"></span>
      </div>
    </div>
  );
};

export default Loader;
