import React from 'react';

const SingleFood = ({food}) => {

   const {img, title, price, name} = food;

    return (
        <div className='card card-body bg-base-200 shadow-md text-center'>
            <img className='p-4' src={img} alt="" />
            <h2 className='font-semibold'>{name}</h2>
            <h2 className='font-light text-sm'>{title}</h2>
            <h2 className='font-semibold'>Price: ${price}</h2>
        </div>
    );
};

export default SingleFood;