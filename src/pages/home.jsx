import React from 'react';
import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner';
import Flashcards from '../components/Flashcards';
import Timer from '../components/Timer';
import Category from '../components/Category';
import Bestseller from '../components/Bestseller';
import Advertisment from '../components/advertisment';
import Product from '../components/Products';
import Newarrival from '../components/Newarrival';
import Services from '../components/Services';
import Footer from '../components/footer';
export default function Home(){
    return(
      <div>
        <div className='flex h-[75vh]'> 
          <Sidebar/>
          <Banner/>
        </div>
        <div className=' flex flex-col gap-15'>
          <Timer/>
          <Flashcards/>
          <Category/>
          <Bestseller/>
          <Advertisment/>
          <Product/>
          <Newarrival/>
          <Services/>
          <Footer/>
        </div>
      </div>
    
    
    )    
}