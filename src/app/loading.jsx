import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen mx-auto">
      <div className="flex gap-4">
        <h1 className="text-4xl">Loading...</h1>
        <span className="loading loading-ring loading-xl"></span>
      </div>
    </div>
  );
};

export default Loader;
