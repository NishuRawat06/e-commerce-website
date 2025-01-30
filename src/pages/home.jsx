import React from 'react';
import Sidebar from '../components/sidebar';
import Banner from '../components/banner';
import Flashcards from '../components/flashcards';
import Timer from '../components/timer';
import Category from '../components/category';
import Bestseller from '../components/bestseller';
import Advertisment from '../components/advertisment';
import Product from '../components/products';
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
        </div>
      </div>
    
    
    )    
}