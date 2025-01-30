import React from "react";
export default function Category() {
  let options = [
    { id: "1", src: "/mobile-phone.png", alt: "mobile", desc: "phones" },
    { id: "2", src: "/monitor.png", alt: "monitor", desc: "computers" },
    {
      id: "3",
      src: "/smartwatch.png",
      alt: "smartwatches",
      desc: "smartwatches",
    },
    { id: "4", src: "/camera.png", alt: "camera", desc: "camera" },
    { id: "5", src: "/headphones.png", alt: "headphones", desc: "headphones" },
    { id: "6", src: "/console.png", alt: "gaming", desc: "gaming" },
  ];
  return (
    <div className="pl-10">
      <div  className="border-red-500 border-l-[15px] rounded-[5px] w-[99vw] text-red-500 font-bold">categories</div>
      <div className="text-3xl font-bold pt-[25px]">Browse By Category</div>
      <div className="flex justify-between pt-[50px]">
      {options.map((option) => (
        <div key={option.id} className="w-[13vw] h-[22vh] border-slate-500 border-2 rounded-[5px] flex flex-col justify-center items-center gap-4">
          <img src={option.src} alt={option.alt} className="w-[5vw] h-[10vh]"/>
          <div className="font-medium">{option.desc}</div>
        </div>
      ))}
      </div>
    </div>
  );
}
