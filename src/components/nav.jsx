import React from "react"
import { Link } from "react-router-dom"
export default function Navbar(){

return(
    <>
    <div className="w-full h-15 px-8 border-b-1 border-slate-400 text-black flex justify-between items-center" >
        <h5 className=" pl-5 font-bold text-2xl">Exclusive</h5>
        <div className="flex justify-center items-center gap-15">
            <Link to="/">home</Link>
            <Link to='/contact'>contact</Link>
            <Link to='/about'>About</Link>
            <Link to='/signup'>signup</Link>
        </div>
    <div className="flex items-center justify-center">
        <div className="flex justify-center items-center">
            <input type="text" placeholder="what are you looking for" className="bg-slate-200 relative w-[243px]"> 
            </input>
          <i className="fa-solid fa-magnifying-glass absolute right-[240px]"></i>
        </div>
        <div className="flex justify-center items-center gap-10 w-50 ">
            <i className="fa-regular fa-heart"></i>
             <i className="fa-solid fa-cart-shopping"></i>
            <Link to="/profile">
              <i className="fa-solid fa-user"></i>
            </Link>
        </div>
    </div>
    </div>
    </>
)
}