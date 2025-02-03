import React from "react";
export default function Services() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[900px] h-[120px] flex justify-around ">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className=" w-fit bg-black border-8 rounded-[50%] text-3xl">
            <i className="fa-solid fa-truck-fast text-white"></i>
          </div>
          <div className="font-bold">Free And Fast Delivery</div>
          <div>free delivery for all orders over ₹150</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className=" w-fit bg-black border-8 rounded-[50%] text-3xl">
            <i className="fa-solid fa-headphones text-white"></i>
          </div>
          <div className="font-bold">24/7 Customer Service</div>
          <div>Friendly 24/7 customer control</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className=" w-fit bg-black border-8 rounded-[50%] text-3xl">
            <i className="fa-solid fa-check text-white"></i>
          </div>
          <div className="font-bold">Money Back Guarantee</div>
          <div>we return money within 30 days</div>
        </div>
      </div>
    </div>
  );
}
