import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleFood = ({food}) => {

   const {img, title, price, name} = food;

   const navigate = useNavigate();

   const navigateToFoodDetails = id =>{
       navigate(`/food/${id}`);
   }

    return (
        <div onClick={() => navigateToFoodDetails(food._id)} className='card card-body bg-base-200 shadow-md text-center'>
            <img className='p-4' src={img} alt="" />
            <h2 className='font-semibold'>{name}</h2>
            <h2 className='font-light text-sm'>{title}</h2>
            <h2 className='font-semibold'>Price: ${price}</h2>
        </div>
    );
};

export default SingleFood;