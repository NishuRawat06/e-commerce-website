import React from "react";
export default function ProfileSidebar() {
  return (
    <div className="flex flex-col gap-15">
      <div>
        <span className="text-slate-500">Home</span>/My account
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="font-medium">Manage My Account</div>
          <div className="text-slate-500 pl-8 hover:cursor-pointer">
            <div className="text-red-500">My Profile</div>
            <div>Address Book</div>
            <div>My payment Option</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-medium">My Orders</div>
          <div className="text-slate-500 pl-8 hover:cursor-pointer">
            <div>My Returns</div>
            <div>My Cancellations</div>
          </div>
        </div>
        <div className="font-medium">Wishlist</div>
      </div>
    </div>
  );
}
