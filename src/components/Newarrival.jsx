import React from "react";
export default function Newarrival() {
  return (
    <div className="pl-15 w-[94.5vw]">
      <div className="border-red-500 border-l-[15px] rounded-[5px] w-[100vw] h-[5vh] text-red-500 font-bold pl-5">
        Featured
      </div>
      <div className="text-3xl font-bold pt-[25px]">New arrival</div>
      <div className="w-full h-[600px] mt-15 flex gap-5">
        <div className="w-[665px] h-[600px] relative">
          <img src="/playstation.jpeg" alt="playstation" />
          <div className="w-[242px] h-[121px] text-white absolute left-5 bottom-30">
            <div className="font-bold">
              play station 5<br />
              <span className="font-light">
                black and white version of ps5 coming out on sale
              </span>
            </div>
            <button className="underline decoration-solid hover:cursor-pointer">shop now</button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative">
            <img
              src="/women collection.jpeg"
              alt=""
              className="w-[670px] h-[250px]"
            />
            <div className="w-[250px] h-[121px] text-white absolute right-5 top-30 text-right">
              <div className="font-bold">
                Women's collections <br />
                <span className="font-light">
                  Featured women's collection that give you another vibe
                </span>
              </div>
              <button className="underline decoration-solid hover:cursor-pointer">shop now</button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="relative">
              <img
                src="/speakers.jpeg"
                alt=""
                className="w-[330px] h-[250px]"
              />
              <div className="w-[242px] h-[121px] text-white absolute left-5 bottom-[-30px]">
                <div className="font-bold">
                  speakers
                  <br />
                  <span className="font-light">Amazon wireless speakers</span>
                </div>
                <button className="underline decoration-solid hover:cursor-pointer">shop now</button>
              </div>
            </div>
            <div className="relative">
              <img src="/perfume.jpeg" alt="" className="w-[320px] h-[250px]" />

              <div className="w-[242px] h-[121px] text-white absolute left-5 bottom-[-30px]">
                <div className="font-bold">
                  perfume
                  <br />
                  <span className="font-light">Gucci instant OUD EDP</span>
                </div>
                <button className="underline decoration-solid hover:cursor-pointer">shop now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
