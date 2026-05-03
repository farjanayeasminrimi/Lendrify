import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="  text-center mt-45">
      <div>
        <h1 className="text-5xl font-extrabold mb-3 text-[#2F3A3D]">Page Not Found!!!</h1>
        <Link href={"/"}>
          <button className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white">
            Go to home page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
