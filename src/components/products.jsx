import React from "react";
export default function Product() {
  let cards = [
    {
      id: 1,
      img: "/product1.jpeg",
      alt: "product1",
      desc: "Breed Dry Dog Food ",
      price: "₹500",
    },
    {
      id: 2,
      img: "/product2.jpeg",
      alt: "product2",
      desc: "CANON EOS DSLR camera ",
      price: "₹30000",
    },
    {
      id: 3,
      img: "/product3.jpeg",
      alt: "product3",
      desc: "ASUS FHD gaming laptop ",
      price: "₹50000",
    },
    {
      id: 4,
      img: "/product4.jpeg",
      alt: "product4",
      desc: "kids electric car ",
      price: "₹550",
    },
    {
      id: 5,
      img: "/product5.jpeg",
      alt: "product5",
      desc: "Nike soccer cleats ",
      price: "₹10000",
    },
    {
      id: 6,
      img: "/product6.jpeg",
      alt: "product6",
      desc: "GP11 shooter USB Gamepad ",
      price: "₹300",
    },
    {
      id: 7,
      img: "/product7.jpeg",
      alt: "product7",
      desc: "Bellavita perfume set ",
      price: "₹500",
    },
    {
      id: 8,
      img: "/product8.jpeg",
      alt: "product8",
      desc: "denim jacket ",
      price: "₹1000",
    },
  ];
  return (
    <div className="pl-15">
      <div className="border-red-500 border-l-[15px] rounded-[5px] w-[99vw] h-[5vh] text-red-500 font-bold pl-5">
        Our Products
      </div>
      <div className="text-3xl font-bold pt-[25px]">Explore our products</div>
      <div className="grid grid-cols-4 grid-rows-2 gap-10 mt-20 w-[90vw]">
        {cards.map((card) => (
          <div key={card.id} className="relative">
            <div>
              <img
                src={card.img}
                alt={card.alt}
                className="w-[20vw] h-[28vh] relative"
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
      <button className="bg-red-500 w-[15vw] h-[5vh] rounded-[5px] mt-[30px] ml-[550px]">view all products</button>
    </div>
  );
}
