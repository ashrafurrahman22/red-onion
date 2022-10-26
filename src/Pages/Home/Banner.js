import React, { useState } from 'react';
import '../../Styles/Banner.css'
import bg from  '../../assets/bannerbackground2.png';
import { useForm } from "react-hook-form";
import useFoods from '../../hooks/useFoods';
import { useNavigate } from 'react-router-dom';
import SingleFood from './SingleFood';

const Banner = () => {

    const[foods] = useFoods();
    const [searchTitle, setSearchTitle] = useState("")

    const navigate = useNavigate();

   const navigateToFoodDetails = id =>{
       navigate(`/food/${id}`);
   }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    setSearchTitle(data);
    // console.log(data)
};

    return (
        <div>
            <div>
                <img src={bg} alt="" />
            </div>

            {/* <div className='relative lg:top-[-340px] top-[-120px]'> */}
            <div className='absolute lg:top-[230px] left-[360px]'>
            <h2 className='lg:text-4xl font-semibold text-center'>Best Food Waiting for your Belly</h2>
            <div className='text-center py-6'>
            {/* <form onSubmit={handleSearch}>
            <input className='border border-black lg:py-2 lg:px-10 rounded-full mr-2' type="text" placeholder='Search' name='search' />
            <input className='btn bg-red-600 lg:w-28  text-white lg:font-medium normal-case rounded-full' type="submit" value="Search" />
            </form> */}
            <form style={{
        fontFamily:"poppins"
      }} onSubmit={handleSubmit(onSubmit)}>
      <input className='border border-black lg:py-2 lg:px-10 rounded-full mr-2' placeholder='Search' {...register("search")} required/>
      {errors.exampleRequired && <span>This field is required</span>}
      <input className='btn bg-red-600 lg:w-28  text-white lg:font-medium normal-case rounded-full' type="submit" />
    </form>
            </div>
            </div>
            <div className='grid grid-cols-3 px-14 gap-10 py-4'>
                {
                    // eslint-disable-next-line array-callback-return
                    foods.filter((value) => {
                        // console.log(value)
                        if(searchTitle===""){
                          return "";
                        }
                        else if(
                          value.name.toLowerCase().includes(searchTitle.search.toLowerCase())
                        )
                        return value;
                      })
                      .map(food=> 
                        <SingleFood
                        key={food._id}
                        food={food}
                        ></SingleFood>
        //               <div>
        //                <div onClick={() => navigateToFoodDetails(food._id)} className='card card-body bg-base-200 shadow-md w-96 text-center'>
        //     <img className='p-4' src={food.img} alt="" />
        //     <h2 className='font-semibold'>{food.name}</h2>
        //     <h2 className='font-light text-sm'>{food.title}</h2>
        //     <h2 className='font-semibold'>Price: ${food.price}</h2>
        // </div>
        //               </div>
                       )
                }
            </div>
        </div>
    );
};

export default Banner;