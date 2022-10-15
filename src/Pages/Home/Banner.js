import React from 'react';
import '../../Styles/Banner.css'
import bg from  '../../assets/bannerbackground2.png';
import { useForm } from "react-hook-form";

const Banner = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <div>
            <div>
                <img src={bg} alt="" />
            </div>

            <div className='relative lg:top-[-340px] top-[-120px]'>
            <h2 className='lg:text-4xl font-semibold text-center'>Best Food Waiting for your Belly</h2>
            <div className='text-center py-6'>
            {/* <form onSubmit={handleSearch}>
            <input className='border border-black lg:py-2 lg:px-10 rounded-full mr-2' type="text" placeholder='Search' name='search' />
            <input className='btn bg-red-600 lg:w-28  text-white lg:font-medium normal-case rounded-full' type="submit" value="Search" />
            </form> */}
            <form onSubmit={handleSubmit(onSubmit)}>
      <input className='border border-black lg:py-2 lg:px-10 rounded-full mr-2' placeholder='Search' {...register("search")} required/>
      {errors.exampleRequired && <span>This field is required</span>}
      <input className='btn bg-red-600 lg:w-28  text-white lg:font-medium normal-case rounded-full' type="submit" />
    </form>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;