import React from 'react';
import useOrders from '../../hooks/useOrders';

const Total = () => {

    const [orders] = useOrders();

    let sum = 0;
    orders.forEach(element =>{
      sum += parseFloat(element.price)
    } )

    const tax = sum / 20;
    const delivery = parseInt(sum / 10);

    const totalBill = parseInt(sum + tax + delivery);
    

    return (
        <div
        className='card card-body w-96'>
             <h2 className='text-left ml-4 text-xl'>Payment</h2>
            <hr className='bg-black' />
            <h2 className='text-md'>From <span className='font-semibold'>Gulshan Plaza Restaurant GPR</span> </h2>
            <h2 className='text-md'>Arriving in 20-30 min</h2>
            <p>107 Rd No 8</p>
            <hr className='bg-black' />
            <div style={{
            letterSpacing:"3px"
        }} className='font-semibold'>
            <h2>Subtotal: ${sum} </h2>
            <h2>Tax: ${tax} </h2>
            <h2>Delivery Fee: ${delivery} </h2>
            <h2>Total: ${totalBill} </h2>
            </div>
        </div>
    );
};

export default Total;