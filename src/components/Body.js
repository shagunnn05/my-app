import React from 'react';
import ProductCard from './ProductCard';
import { ProductItems } from '../utils/mockData';
// import Card from './Card';
const Body = () => {
  let Item=ProductItems;
  function handleTopRatedProducts() {
    Item = ProductItems.filter((product) => product.rating.rate > 4);
    console.log(Item);
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
      <button className='px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md w-60 hover:bg-blue-700 hover:shadow-lg' onClick={handleTopRatedProducts}>
        Top Rated Products
      </button>
      <div className='flex flex-wrap justify-center gap-4 product-items'>
{
  Item.map((product)=>
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
