import React from "react";
export default function Advertisment() {
  return (
    <div className="w-[93.7vw] pl-15 relative">
      <img src="/bannerimg.jpeg" alt="banner" className="h-[80vh] w-full" />
      <div className="w-[30vw] absolute top-20 left-20 text-white font-medium text-[50px]">
        Enhance Your Music Experience
      </div>
      <button className="w-[150px] h-[60px] rounded-[5px] bg-green-500 absolute left-20 bottom-10 text-white">
        Buy Now
      </button>
    </div>
  );
}
