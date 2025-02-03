import React, { useEffect } from "react";
import { useState } from "react";
export default function Timer() {
  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [mins, setmins] = useState(0);
  const [secs, setsecs] = useState(0);
  const deadline = "february,5,2025";
  const gettime = () => {
    const time = Date.parse(deadline) - Date.now();
    setdays(Math.floor(time / (24 * 60 * 60 * 1000)));
    sethours(Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))); //for finding hourse from remaining millisec after subtracting days millisec
    setmins(Math.floor((time % (60 * 60 * 1000)) / (60 * 1000))); //for finding hourse from remaining millisec after subtracting hours millisec
    setsecs(Math.floor((time % (60 * 1000)) / 1000)); //for finding hourse from remaining millisec after subtracting mins millisec
  };
  useEffect(() => {
    const interval = setInterval(() => {
      gettime();
    }, 1000);
    return () => clearInterval;
  }, []);
  return (
    <div className="pl-15">
      <div className="border-red-500 border-l-[15px] rounded-[5px] w-[99vw] h-[5vh] text-red-500 font-bold pl-5">
        Today's
      </div>
      <div className="flex justify-start ms-4 items-end mt-10 gap-15">
        <div className="font-bold text-3xl">
          Flash Sale
        </div>
        <div className=" flex gap-5 ">
          <div>
            <div className="font-medium" >Days</div>
            <div className="text-black font-bold  text-4xl">{days}:</div>
          </div>
          <div>
            <div className="font-medium">Hours</div>
            <div className="text-black font-bold  text-4xl">{hours}:</div>
          </div>
          <div>
            <div className="font-medium">Minutes</div>
            <div className="text-black font-bold  text-4xl">{mins}:</div>
          </div>
          <div>
            <div className="font-medium">Seconds</div>
            <div className="text-black font-bold  text-4xl">{secs}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
