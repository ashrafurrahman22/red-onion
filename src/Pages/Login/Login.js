import React from 'react';
import { useForm } from 'react-hook-form';
import banner from '../../assets/bannerbackground2.png';
import logo from '../../assets/logo2.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
        console.log(user);
      }

    if (loading) {
        return <Loading></Loading>
    }

    if(error){
        signInError= <p className='text-red-500'><small>{error?.message}</small></p>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    }



    return (
        <div>
        <div>
            <img src={banner} alt="" />
        </div>

        {/* <div className='relative lg:top-[-410px] top-[-120px]'> */}
        <div className='absolute lg:top-[160px] left-[480px]'>
            <img className='w-56 mx-auto py-4' src={logo} alt="" />
        
        <div className='mx-auto text-center'>
        <form  style={{
        fontFamily:"poppins"
      }} className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
      <input className='border w-72 border-black lg:py-2 lg:px-10 rounded my-2 mr-2' placeholder='Email' type="email" {...register("email")} required/>
      <input className='border w-72 my-2 border-black lg:py-2 lg:px-10 rounded mr-2' placeholder='Password' type='password' {...register("password")} required/>
      {errors.exampleRequired && <span>This field is required</span>}
      {signInError}
      <input className='btn bg-red-600 my-2 lg:w-72  text-white lg:font-medium normal-case rounded' type="submit" value="Log in" />
    </form>
        </div>
       
        </div>
        
    </div>
    );
};

export default Login;