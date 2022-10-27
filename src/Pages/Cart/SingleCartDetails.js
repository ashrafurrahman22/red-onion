import React from 'react';

const SingleCartDetails = ({order}) => {

    const {name, img, price} = order;

    return (
        <div className=''>
            <div className="card py-3 px-2 lg:card-side bg-base-200 shadow-sm w-full">
  <figure><img className='w-20' src={img} alt="Album"/></figure>
  <div className="card-body py-0">
    <h2>{name}</h2>
    <p>Price: ${price}</p>
  </div>
</div>
        </div>
    );
};

export default SingleCartDetails;