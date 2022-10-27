import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Food from './Food';
import Review from './Review';

const Home = () => {

    

    return (
        <div>
            <Banner/>
            <Food/>
            <div style={{
                fontFamily:"poppins"
            }} className='text-center py-3'>
                <Link to='/cart'><button className='btn font-medium normal-case bg-gray-600 px-20'>Checkout Your Food</button></Link>
            </div>
            <Review/>
        </div>
    );
};

export default Home;