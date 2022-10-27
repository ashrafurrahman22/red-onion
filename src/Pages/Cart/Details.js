import React from 'react';
import useOrders from '../../hooks/useOrders';
import SingleCartDetails from './SingleCartDetails';

const Details = () => {

    const [orders] = useOrders();

    

    return (
        <div className='card card-body'>
             <h2 className='text-left ml-4 text-xl'>Your Orders</h2>
            <hr className='bg-black' />
            <div className='flex flex-col gap-4'>
                {
                    orders.map(order => <SingleCartDetails
                    key={order._id}
                    order={order}
                    /> )
                }
            </div>
        </div>
    );
};

export default Details;