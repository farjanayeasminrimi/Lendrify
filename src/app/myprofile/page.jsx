import Image from "next/image";
import React from "react";

const MyProfilePage = () => {
  return (
    <div>
      <div>
        <Image
          src={
            "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg"
          }
          width={100}
          height={100}
          alt="User Photo"
        ></Image>
      </div>
      <div>
        <div>
          <h1>Farjana Yeasmin</h1>
        </div>
        <div>
          <button className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
