"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import { Bounce, toast } from "react-toastify";

const EditBtn = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const url = e.target.url.value.trim();
    const updateInfo = {};
    if (name) {
      updateInfo.name = name;
    }
    if (url) {
      updateInfo.image = url;
    }
    await authClient.updateUser(updateInfo);
    console.log(name, url);
    router.refresh();
    toast.success("Updated Info Successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  return (
    <div>
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white"
      >
        Edit
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form onSubmit={onSubmit}>
            <label className="label my-2">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full  outline-none border border-[#5F737A] mb-2"
              placeholder="Your Name"
            />

            <label className="label my-2">Photo URL</label>
            <input
              name="url"
              type="url"
              className="input w-full outline-none border border--[#5F737A]"
              placeholder="Photo URL"
            />

            <div className="flex gap-4 items-center mt-4">
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_1").close()}
                className="btn"
              >
                Close
              </button>
              <button
                onClick={() => document.getElementById("my_modal_1").close()}
                type="submit"
                className="btn  bg-[#5F737A] hover:bg-[#4C5E64] text-white "
              >
                Saved
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default EditBtn;
