import React from "react";
export default function Bestseller() {
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
      img: "dressimg.jpeg",
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
  ]
  return(
  <div className="pl-10">
    <div className="border-red-500 border-l-[15px] rounded-[5px] w-[99vw] text-red-500 font-bold">this month</div>
    <div className="flex justify-between">
      <div  className="text-3xl font-bold pt-[25px]">best selling product</div>
      <button className=" w-[140px] h-[40px] rounded-[5px] bg-red-500">view all</button>
    </div>
    <div className="flex justify-around mt-14 pl-10 gap-5">
      {cards.map((card) => (
        <div key={card.id} className="relative">
          <div>
            <img src={card.img} alt={card.alt} className="w-[18vw] h-[28vh] relative" />
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
  )
}
