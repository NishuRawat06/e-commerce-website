import React from "react"
import { Link } from "react-router-dom"
export default function Navbar(){

return(
    <>
    <div className="w-full h-20 px-8 bg-gray-400 text-black flex justify-between items-center" >
        <h5 className=" pl-5 font-bold font-sans">Exclusive</h5>
        <div className="flex justify-center items-center gap-15">
            <Link to="/">home</Link>
            <Link to='/contact'>contact</Link>
            <Link to='/about'>About</Link>
            <Link to='/signup'>signup</Link>
        </div>
    <div className="flex items-center justify-center">
        <div className="flex justify-center items-center border-black border-2 ">
            <input type="text" placeholder="what are you looking for" className="bg-transparent text-black outline-none "> 
            </input>
          <i className="fa-solid fa-magnifying-glass "></i>
        </div>
        <div className="flex justify-center items-center gap-10 w-50 ">
            <i className="fa-regular fa-heart"></i>
             <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-user"></i>
        </div>
    </div>
    </div>
    </>
)
}