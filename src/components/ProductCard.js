import React from 'react';
const ProductCard = ({productItems}) => {
  // const { productItem} = props;
  return (
    <div className='flex flex-col gap-4 px-3 border-2 border-slate-600 w-72'>
      <img
        src={productItems.image} 
        alt={productItems.title}
          className='h-80 object-cover rounded-md hover:scale-105 transition-transition duration-300'
          />
        <h2 className='text-2xl font-semibold text-gray-800'>{productItems.title}</h2>
        <p className='text-gray-600 line-clamp-2'>{productItems.description}</p>
        <h3 className='text-2xl font-bold text-indigo-600'>
        <span className='text-slate-800'>Price: </span>
        {productItems.price}</h3>
        <h3 className='text-2xl font-bold text-indigo-600'>
          <span className='text-slate-800'>Rate: </span>
          {productItems?.rating?.rate}</h3>
      </div>
  );
};
export default ProductCard;