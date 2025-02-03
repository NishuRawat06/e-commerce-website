import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileMain from "../components/ProfileMain";
import Footer from "../components/footer";
export default function Profile() {
  return (
    <div className="flex flex-col">
      <div className="ml-13 mt-20 flex gap-55">
        <ProfileSidebar />
        <ProfileMain />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
