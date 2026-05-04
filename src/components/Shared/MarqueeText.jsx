import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  return (
    <div className="bg-[#F3EFEA]">
      <div className="container mx-auto rounded-md bg-gradient-to-r from-[#EEF2F1] via-[#DCE3E1] to-[#A3B3AF] p-4  flex gap-2.5 items-center">
        <button className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white">Update :</button>
        <Marquee pauseOnHover>
          <p className="text-[#2F3A3D] font-medium">
            New Arrivals: Atomic Habits &nbsp;|&nbsp; The Psychology of Money &nbsp;|&nbsp; Sapiens
            &nbsp;|&nbsp; The Alchemist &nbsp;|&nbsp; Special Discount on Memberships —{" "}
            <span className="text-orange-600">Up to 30% Off</span>&nbsp; | Limited Time
            Offer!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; •••&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeText;
