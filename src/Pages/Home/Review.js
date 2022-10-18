import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';


const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch("review.json")
        .then(res => res.json())
        .then(data=> setReviews(data))
    },[])

    return (
        <div style={{
            fontFamily:"poppins"
          }} className='px-14'>

            <div className='py-4'>
            <h2 className='text-2xl font-semibold'>Why you choose us?</h2>
            <p className='py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Commodi libero impedit voluptatibus eius?</p>
            </div>

            <div className="grid grid-cols-3 gap-10">
                    {
                        reviews.map(review=>
                            <SingleReview
                            key={review._id}
                            review={review}
                            ></SingleReview>
                            )
                    }
            
            </div>

        </div>
    );
};

export default Review;