import Link from "next/link";
import React from "react";

const ReadyToStart = () => {
  return (
    <div className="mt-12 bg-gradient-to-r from-[#EEF2F1] via-[#DCE3E1] to-[#A3B3AF]">
      <div className="text-center space-y-5 py-22">
        <h1 className="text-center text-4xl font-bold text-[#2F3A3D]">
          Ready To Build Your Reading Habit?
        </h1>
        <Link href={"/login"}>
          <button className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white rounded-4xl">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReadyToStart;
