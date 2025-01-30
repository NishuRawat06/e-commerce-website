import React from "react";
export default function Flashcards() {
  let cards = [
    {
      id: 1,
      img: "/blush.jpeg",
      alt: "blush",
      desc: "pixi by petra on the glow blush ruby ",
      price: "₹1950",
      discount:"-40%"
    },
    {
      id: 2,
      img: "/heels.jpeg",
      alt: "heels",
      desc: "pretty bow black platform heels ",
      price: "₹1099",
      discount:"-35%"
    },
    {
      id: 3,
      img: "/hoodie.jpeg",
      alt: "hoodie",
      desc: "women colourblock hoodie ",
      price: "₹630",
      discount:"-30%"
    },
    {
      id: 4,
      img: "/gameconsole.jpeg",
      alt: "gameconsole",
      desc: "havit hv-g92 gamepad ",
      price: "₹550",
      discount:"-10%"
    },
    {
      id: 5,
      img: "/sidebag.jpeg",
      alt: "sidebag",
      desc: "white sling bag ",
      price: "₹300",
      discount:"-20%"
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="flex justify-around mt-14 pl-10 gap-5">
      {cards.map((card) => (
        <div key={card.id} className="relative">
          <div>
            <img src={card.img} alt={card.alt} className="w-[18vw] h-[28vh] relative" />
            <i className="fa-regular fa-heart absolute top-2 right-2 text-xl text-gray-600 cursor-pointer"></i>
            <i className="fa-solid fa-eye absolute top-15 right-2 text-xl text-gray-600 cursor-pointer"></i>
            <div className="w-14 h-7 text-center rounded-[5px] absolute top-2 left-2 bg-red-500">{card.discount}</div>
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
    <button className="bg-red-500 w-[15vw] h-[5vh] rounded-[5px] mt-[30px]">view all products</button>
    </div>

  );
}
