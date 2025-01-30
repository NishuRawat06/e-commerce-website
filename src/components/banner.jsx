import React from "react"
import { useState,useEffect } from "react"
export default function Banner(){
    let slides=[
        {id:1,image:"/salepic.jpeg",alt:"salepic"},
        {id:2,image:"/fridaysaleimg.jpeg",alt:"shoeimg"},
        {id:3,image:"/makeup.jpeg",alt:"makeupimg"},
        {id:4,image:"/newphone.jpeg",alt:"phoneimg"}
     ]
     const [currentind,setcurrentind]=useState(0)
     const prevslide=()=>{
        setcurrentind((prevind)=>(prevind-1+slides.length)%slides.length)
     }
     const nextslide=()=>{
        setcurrentind((prevind)=>(prevind+1)%slides.length)

     }
    useEffect(()=>{
    const interval=setInterval(()=>{
        setcurrentind((prevind)=>
            prevind===slides.length-1 ? 0 : prevind+1
        )
    },4000);
    return () => clearInterval(interval);
}, [slides.length])


    return(
        <div className="w-full h-[75vh] flex mt-7 overflow-hidden relative">
            <button className="font-extrabold text-lg" onClick={nextslide}>&lt;</button>
            <div className="flex">
                {slides.map((slide,index) => (
                    index===currentind&&(
                    <div key={slide.id} className="w-full flex-shrink-0">
                        <img src={slide.image} alt={slide.alt} className="h-100 w-300 object-fill"/>
                    </div> 
                    )
                ))}
            </div>
            <button  className="font-extrabold" onClick={prevslide} >&gt;</button>
            <div className="absolute bottom-20 left-1/2 transform flex gap-2">
             {slides.map((slide,index)=>
              <button
               key={slide.id} 
               onClick={()=>setcurrentind(index)}
               className={`rounded-full h-3 w-3  ${index===currentind?"bg-blue-500":"bg-gray-500"}`}
                />
            
            )}

            </div>
        </div>
    )
}