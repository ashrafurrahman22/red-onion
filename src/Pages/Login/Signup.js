import React from 'react';
import { useForm } from 'react-hook-form';
import banner from '../../assets/bannerbackground2.png';
import logo from '../../assets/logo2.png'
import {
    useCreateUserWithEmailAndPassword,
  } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Signup = () => {

    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const [createUserWithEmailAndPassword, user2, loading2, error2] =
      useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
  
    let signInError;
  
    if (user2) {
      navigate(from, { replace: true });
    }
  
    if (loading2) {
      return <Loading></Loading>;
    }
  
    if (error2) {
      signInError = (
        <p className="text-red-500">
          <small>
            {error2?.message}
          </small>
        </p>
      );
    }
  
    const onSubmit = async (data) => {
      await createUserWithEmailAndPassword(data.email, data.password);
    };

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
      <input className='border w-72 border-black lg:py-2 lg:px-10 rounded my-2 mr-2' placeholder='Name' {...register("name")} required/>
      <input className='border w-72 border-black lg:py-2 lg:px-10 rounded my-2 mr-2' placeholder='Email' type="email" {...register("email")} required/>
      <input className='border w-72 my-2 border-black lg:py-2 lg:px-10 rounded mr-2' placeholder='Password' type='password' {...register("password")} required/>
      {errors.exampleRequired && <span>This field is required</span>}
      {signInError}
      <input  className='btn bg-red-600 my-2 lg:w-72  text-white lg:font-medium normal-case rounded' type="submit" value="Sign up" />
    </form>
        </div>
       
        </div>
        
    </div>
    );
};

export default Signup;