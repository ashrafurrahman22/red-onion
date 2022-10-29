import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReview from './SingleReview';


const Review = () => {
    const [reviews] = useReviews();

    return (
        <div style={{
            fontFamily:"poppins"
          }} className='px-14'>

            <div className='py-4'>
            <h2 className='text-2xl font-semibold'>Why you choose us?</h2>
            <p className='py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Commodi libero impedit voluptatibus eius?</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
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