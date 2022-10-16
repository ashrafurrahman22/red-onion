import React from 'react';
import { useForm } from 'react-hook-form';
import banner from '../../assets/bannerbackground2.png';
import logo from '../../assets/logo2.png'

const Signup = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <div>
        <div>
            <img src={banner} alt="" />
        </div>

        {/* <div className='relative lg:top-[-410px] top-[-120px]'> */}
        <div className='absolute lg:top-[140px] left-[480px]'>
            <img className='w-56 mx-auto py-4' src={logo} alt="" />
        
        <div className='mx-auto text-center'>
        <form style={{
        fontFamily:"poppins"
      }} className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
      <input className='border w-72 border-black lg:py-2 lg:px-10 rounded-xl my-2 mr-2' placeholder='Name' {...register("name")} required/>
      <input className='border w-72 border-black lg:py-2 lg:px-10 rounded-xl my-2 mr-2' placeholder='Email' type="email" {...register("email")} required/>
      <input className='border w-72 my-2 border-black lg:py-2 lg:px-10 rounded-xl mr-2' placeholder='Password' type='password' {...register("search")} required/>
      {errors.exampleRequired && <span>This field is required</span>}
      <input  className='btn bg-red-600 my-2 lg:w-72  text-white lg:font-medium normal-case rounded-xl' type="submit" value="Sign up" />
    </form>
        </div>
       
        </div>
        
    </div>
    );
};

export default Signup;