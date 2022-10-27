import React from 'react';
import { useForm } from 'react-hook-form';
import Details from './Details';
import Total from './Total';

const Cart = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const onSubmit = (data) => {
        console.log(data)
      };

    return (
        <div className='grid grid-cols-3'>
            <div className='card card-body w-96 mx-auto text-center'>
            <h2 className='text-left ml-4 text-xl'>Edit Delivery Details</h2>
            <hr className='bg-black' />
        <form style={{
        fontFamily:"poppins"
      }} className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
      <input className='w-full lg:py-2 lg:px-10 rounded my-2 mr-2' defaultValue="Deliver To Door" disabled {...register("condition")} required/>
      <input className='w-full bg-base-200 lg:py-2 lg:px-10 rounded my-2 mr-2' placeholder='Address' type="text" {...register("address")} required/>
      <input className='w-full bg-base-200 lg:py-2 lg:px-10 rounded my-2 mr-2' placeholder='Name' type="text" {...register("name")} required/>
      <input className='w-full bg-base-200 lg:py-2 lg:px-10 rounded my-2 mr-2' placeholder='Email' type="email" {...register("name")} required/>
      <input className='w-full bg-base-200 lg:py-2 lg:px-10 rounded my-2 mr-2' placeholder='Contact' type="number" {...register("contact")} required/>
      
      {errors.exampleRequired && <span>This field is required</span>}
      <input  className='btn bg-red-600 my-2 lg:w-full  text-white lg:font-medium normal-case rounded border-none' type="submit" value="Place Order" />
    </form>
        </div>

        <div>
            <Details/>
        </div>

        <div>
          <Total/>
        </div>

        </div>
    );
};

export default Cart;