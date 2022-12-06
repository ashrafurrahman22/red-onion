import React from 'react';
import { toast } from 'react-toastify';

const SingleCartDetails = ({order}) => {

    const {name, img, price} = order;

    // delete
    const handleDelete = id =>{
      const procede = window.confirm('Are You Sure?');
      if(procede){
        const url = `https://red-onion-server-production.up.railway.app/carts/${id}`
        fetch(url, {
          method : "DELETE"
        })
        .then(res => {
            res.json()
          toast.success("Successfully Removed")
          })
        .then(data => {
          console.log(data)
        })
      }
    }

    return (
        <div className=''>
            <div className="card py-3 px-2 lg:card-side bg-base-200 shadow-sm w-full">
  <figure><img className='w-20' src={img} alt="Album"/></figure>
  <div className="card-body py-0">
    <h2>{name}</h2>
    <p>Price: ${price}</p>
  </div>
  <div>
    <button onClick={()=>handleDelete(order._id)} className='btn btn-xs'>X</button>
  </div>
</div>
        </div>
    );
};

export default SingleCartDetails;