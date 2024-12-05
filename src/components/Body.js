import React , { useState} from 'react';
import ProductCard from './ProductCard';
import { PRODUCT_ITEMS } from '../utils/mockData';
import Categories from './Categories';
// import Card from './Card';

const Body = () => {
  const[filteredItems,setfilteredItems]=useState(PRODUCT_ITEMS);
  function handleRatingFilter(minRate,maxRate){
    setfilteredItems(
      PRODUCT_ITEMS.filter(
      (product) =>
      product.rating.rate >= minRate && product.rating.rate <maxRate));
}
  function AllProducts(){
    setfilteredItems(PRODUCT_ITEMS);
  }
 
  return (
    <section className='flex flex-col gap-4 px-2 py-2 '>
      <div className='flex gap-3'>
        <input
          type='text'
          className='w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400'
          placeholder='Search...'
        />
        Search
      </div>
      <button className='px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md w-60 hover:bg-blue-700 hover:shadow-lg' onClick={AllProducts}>
         All Products
      </button>

      <div className='flex flex-wrap gap-2'>
        <button
          className='px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
          onClick={() => {
            handleRatingFilter(0,1);
          }}
          >
            Rating 0-1⭐
          </button>

          <button
            className='px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
            onClick={() => {
              handleRatingFilter(1,2);
            }}
          >
            Rating 1-2⭐
          </button>
          <button
            className='px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
            onClick={() => {
              handleRatingFilter(2,3);
            }}
          >
            Rating 2-3⭐
            </button>
          <button
          className='px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
          onClick={() => {
            handleRatingFilter(3,4);
          }}
          >
            Rating 3-4⭐
            </button>
          <button 
            className='px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
            onClick={() => {
              handleRatingFilter(4,5);
            }}
          >
            Rating 4-5⭐
            </button>'
      </div>
      <Categories/>
      <div className='flex flex-wrap justify-center gap-4 product-items'>
        <h2 className='w-full text-xl font-semibold text-gray-800 text-center mb-4'>Total Items: {filteredItems.length}</h2>
{
  filteredItems.map((product)=>
    <ProductCard productItems={product} key={product.id}/>
  )
}

        {/* <ProductCard ProductItems={ProductItems[1]}
            />

        <ProductCard ProductItems={ProductItems[2]}
            /> */}


        
        </div>
    </section>
  );
};

export default Body;
