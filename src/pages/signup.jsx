import React from "react";
export default function Signup() {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="w-[40vw] h-[85vh] bg-[#8F8A93] flex flex-col justify-center items-center gap-10 ">
        <div className="text-3xl"> Sign Up</div>
        <div>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label> Name </label>
              <input type="text" placeholder="enter your name" className=" w-[20vw] pl-2 border-2 border-black"></input>
            </div>
            <div className="flex flex-col gap-1">
              <label> Email</label>
              <input type="email" placeholder="enter your email" className=" w-[20vw] pl-2 border-2 border-black"></input> 
            </div>
            <div className="flex flex-col gap-1">
              <label> password </label>
              <input type="password" placeholder="enter your password" className=" w-[20vw] pl-2 border-2 border-black"></input>
            </div>
          </form>
        </div>
        <div>
          <button className="w-[15vw] border-2 bg-[#EA738DFF] rounded-[5px] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 active:shadow-xl">Sign in</button>
        </div>
        <div className=" w-[12vw] text-3xl flex justify-around">
          <div><i className="fa-brands fa-google text-red-500"></i></div>
          <div><i className=  "fa-brands fa-facebook-f text-blue-900"></i></div>
          <div><i className="fa-brands fa-linkedin-in text-blue-500"></i></div>
        </div>
        <div>
        already a user?<a className="underline decoration-solid hover:cursor-pointer">LOGIN</a>
        </div>
      </div>
    </div>
    
  );
}
