import React from "react";
export default function Footer() {
  return (
    <div className="bg-black pl-2 pt-20 flex flex-col justify-center items-center">   
    <div className="flex justify-around w-[1340px] h-[340px]">
      <div className="text-white flex flex-col gap-5">
        <div className="font-bold">Exclusive</div>
        <div>Subscribe</div>
        <div>Get 10% off on your first order</div>
        <input
          type="text"
          placeholder="Enter your email"
          className="w-fit border-white border-2 pl-2 rounded-[4px]"
        ></input>
      </div>
      <div className="text-white flex flex-col gap-5 w-[190px] h-[180px]">
        <div className="font-bold">support</div>
        <div>111 Bijay Sarani, Dhaka,DH 1515,Bangladesh</div>
        <div>exclusive @gmail.com</div>
        <div>+88015-88888-9999</div>
      </div>
      <div className="text-white flex flex-col gap-5">
        <div className="font-bold">Account</div>
        <div>My account</div>
        <div>Login /Register</div>
        <div>Cart</div>
        <div>Wishlist</div>
        <div>Shop</div>
      </div>
      <div className="text-white flex flex-col gap-5">
        <div className="font-bold">Quick Link</div>
        <div>Privacy Policy</div>
        <div>Terms of use</div>
        <div>FAQ</div>
        <div>Contact</div>
      </div>
      <div className="text-white flex flex-col gap-5">
        <div>Download APP</div>
        <div>save $3 with App New User Only </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <img src="/qr.jpg" alt="" className="w-[80px] h-[80px]" />
          </div>
          <div className="">
            <div className="">
                <img src="/footer4.png" alt="" className="w-[110px] h-[45px]" />
            </div>
            <div>
                <img src="/footer3.png" alt="" className="w-[110px] h-[45px]" />
            </div>
          </div>
        </div>
        <div className="flex justify-around gap-4 text-2xl">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </div>
    <div className="text-slate-400 text-2xl mb-5"> &#169; copyright rimel 2022.all right reserved </div>
    </div>
  );
}
