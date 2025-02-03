import React from "react";
import { useState } from "react";
export default function Productdesc() {
  let cards = [
    {
      id: 1,
      img: "/bagpack.jpeg",
      alt: "bagpack",
      desc: "college bagpack with laptop sleeve ",
      price: "₹1500",
    },
    {
      id: 2,
      img: "/dressimg.jpeg",
      alt: "dress",
      desc: "women bodycon black dress ",
      price: "₹800",
    },
    {
      id: 3,
      img: "/shoesimg.jpeg",
      alt: "shoe",
      desc: "men beige colour blocked sneakers",
      price: "₹1200",
    },
    {
      id: 4,
      img: "/tulipimg.jpeg",
      alt: "tulip",
      desc: "romantic tulip night light ",
      price: "₹350",
    },
  ];
  let [count, setcount] = useState(0);
  let [Liked, setLiked] = useState(false);
  const togglelike = () => {
    setLiked(!Liked);
    if (Liked === false) {
      alert("Added to favourites");
    }
  };
  let inccount = () => {
    setcount(count + 1);
  };
  let deccount = () => {
    if (count === 0) {
      setcount(0);
    } else {
      setcount(count - 1);
    }
  };
  return (
    <div>
      <div className="pb-10 pt-10 w-[50vw] pl-15">
        <span className="text-slate-500">Account/Gaming/</span>Havic HV G-92
        Gamepad
      </div>
      <div className="flex gap-10 w-[1370px] pl-15">
        <div className="w-[50vw] h-[100px]">
          <img src="/product1.png" alt="" />
          <img src="/product2.png" alt="" />
          <img src="/product3.png" alt="" />
          <img src="/product4.png" alt="" />
        </div>
        <div className="pt-25 w-[150vw]">
          <img src="/productmain.png" alt="" className="w-[100vw] h-[50vh]" />
        </div>
        <div className="pl-15 w-[85vw]">
          <div className="flex flex-col gap-2 border-b-1 border-slate-500 h-[200px]">
            <div className="font-bold text-2xl">Havic HV G-92 Gamepad</div>
            <div>
              <i className="fa-solid fa-star text-amber-400"></i>
              <i className="fa-solid fa-star text-amber-400"></i>
              <i className="fa-solid fa-star text-amber-400"></i>
              <i className="fa-solid fa-star text-amber-400"></i>
              <i className="fa-solid fa-star text-slate-500"></i>
              <span className="text-slate-500">(150 Reviews)</span>
              <span className="text-cyan-300">In Stock</span>
            </div>
            <div className="font-medium">₹2000</div>
            <div>
              Play station 5 controller skin high quality Vinyl With air channel
              adhesive for easy bubble free install & mess free removal pressure
              sesnsitive
            </div>
          </div>
          <div className="pt-5 flex flex-col gap-8">
            <div className="text-2xl flex flex-row gap-2 ">
              Colours:
              <div className="bg-blue-400 w-[30px] h-[30px] rounded-[50%] text-blue-400 border-black border-2 hover:cursor-pointer"></div>
              <div className="bg-pink-500 w-[30px] h-[30px] rounded-[50%] text-pink-500 hover:cursor-pointer"></div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="text-3xl">size :</div>
              <div className="w-[224px] h-[32px] flex flex-row gap-4 text-center">
                <div className="w-[32px] h-[32px] border-black border-2 rounded-[5px] font-medium">
                  XS
                </div>
                <div className="w-[32px] h-[32px] border-black border-2 rounded-[5px] font-medium">
                  S
                </div>
                <div className="w-[32px] h-[32px] border-black border-2 rounded-[5px] font-medium bg-red-500 text-white">
                  M
                </div>
                <div className="w-[32px] h-[32px]  border-black border-2 rounded-[5px] font-medium">
                  L
                </div>
                <div className="w-[32px] h-[32px]  border-black border-2 rounded-[5px] font-medium">
                  XL
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-[159px] h-[44px] border-1 flex text-2xl text-center">
                <button
                  className="border-1 border-slate-500 h[44px] w-[40px]"
                  onClick={deccount}
                >
                  -
                </button>
                <div className="w-[80px] h-[43px] border-1 border-slate-500">
                  {count}
                </div>
                <button
                  className="border-1 border-slate-500 h-[43px] w-[40px] bg-red-500 text-white"
                  onClick={inccount}
                >
                  +
                </button>
              </div>
              <div>
                <button className="w-[165px] h-[44px] bg-red-500 text-white rounded-[4px] hover:cursor-pointer">
                  BUY NOW
                </button>
              </div>
              <div
                className="border-black border-1 flex justify-center items-center h-[44px] w-[50px] text-3xl rounded-[4px]"
                onClick={togglelike}
              >
                {Liked ? (
                  <i className="fa-solid fa-heart text-red-500"></i>
                ) : (
                  <i className="fa-regular fa-heart"></i>
                )}
              </div>
            </div>
            <div className="border-2 border-black w-[399px] h-[180px] pl-5 pt-5">
              <div className="flex gap-4 h-[90px]">
                <div>
                  <i className="fa-solid fa-truck-fast text-4xl"></i>
                </div>
                <div>
                  <span className="font-medium text-2xl">Free Delivery</span>
                  <br />
                  Enter your postal code for delivery availability
                </div>
              </div>
              <div className="h-[90px] flex gap-6">
                <div>
                  <i className="fa-solid fa-arrows-rotate text-4xl"></i>
                </div>
                <div>
                  <span className="font-medium text-2xl">Return Delivery</span>
                  <br />
                  Free 30 days delivery returns,detail
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-15 pt-50">
        <div className="border-red-500 border-l-[15px] rounded-[5px] w-[99vw] h-[5vh] text-red-500 font-bold pl-5">
          Related item
        </div>
        <div className="flex justify-between mt-14 pl-2 w-[89.7vw]">
          {cards.map((card) => (
            <div key={card.id} className="relative">
              <div>
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-[20vw] h-[30vh] relative"
                />
                <i className="fa-regular fa-heart absolute top-2 right-2 text-xl text-gray-600 cursor-pointer"></i>
                <i className="fa-solid fa-eye absolute top-15 right-2 text-xl text-gray-600 cursor-pointer"></i>
              </div>
              <div className="text-green-800 font-bold">{card.price}</div>
              <div className="w-45 font-bold">{card.desc}</div>
              <div>
                <i className="fa-solid fa-star text-amber-400"></i>
                <i className="fa-solid fa-star text-amber-400"></i>
                <i className="fa-solid fa-star text-amber-400"></i>
                <i className="fa-solid fa-star text-amber-400"></i>
                <i className="fa-solid fa-star text-slate-500"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-30">
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
                  <img
                    src="/footer4.png"
                    alt=""
                    className="w-[110px] h-[45px]"
                  />
                </div>
                <div>
                  <img
                    src="/footer3.png"
                    alt=""
                    className="w-[110px] h-[45px]"
                  />
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
        <div className="text-slate-400 text-2xl mb-5">
          {" "}
          &#169; copyright rimel 2022.all right reserved{" "}
        </div>
      </div>
      </div>
    </div>
  );
}
