"use client";
import React from "react";
import { Bounce, toast } from "react-toastify";

const BorrowBtn = () => {
  return (
    <button
      className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white"
      onClick={() =>
        toast.success("Borrowed Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        })
      }
    >
      Borrow This Book
    </button>
  );
};

export default BorrowBtn;
