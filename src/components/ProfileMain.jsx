import React from "react";
export default function ProfileMain() {
  return (
    <div>
        <div className="font-medium ml-145">Welcome!<span className="text-red-500">Nishu</span></div>
      <div className="w-[750px] h-[630px] mt-25">
        <span className="text-red-500">Edit Your Profile</span>

        <form className="w-[650px] h-[82px] ">
          <div className="grid grid-cols-2 grid-row-2 gap-8">
            <div>
              <div>
                <label>First Name</label>
              </div>
              <div>
                <input type="text" placeholder="Nishu" className="bg-slate-200 w-76 pl-2"></input>
              </div>
            </div>
            <div>
              <div>
                <label>Last Name</label>
              </div>
              <div>
                <input type="text" placeholder="Rawat" className="bg-slate-200 w-76 pl-2"></input>
              </div>
            </div>
            <div>
              <div>
                <label>Email</label>
              </div>
              <div>
                <input type="text" placeholder="nishurawat123@gmail.com" className="bg-slate-200 w-76 pl-2"></input>
              </div>
            </div>
            <div>
              <div>
                <label>Address</label>
              </div>
              <div>
                <input type="text" placeholder="abcd" className="bg-slate-200 w-76 pl-2"></input>
              </div>
            </div>
            <div className="flex flex-col gap-5">
                <div><label>Password Change</label></div>
                <div><input type="text" placeholder="Current Password" className="bg-slate-200 w-[650px] pl-2"></input></div>
                <div><input type="password" placeholder="New Password" className="bg-slate-200 w-[650px] pl-2"></input></div>
                <div><input type="password" placeholder="Confirm New Password" className="bg-slate-200 w-[650px] pl-2"></input></div>
            </div>
          </div>
          <div className="flex gap-5 justify-end mt-5">
          <div><button className="text-center w-[120px] h-[40px]">cancel</button></div>
          <div><button className="bg-red-500 w-[150px] h-[40px] text-white">Save Changes</button></div>
          </div>
        </form>
      </div>
    </div>
  );
}
