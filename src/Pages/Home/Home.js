import React from 'react';
import Banner from './Banner';
import Food from './Food';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Food/>
            <Review/>
        </div>
    );
};

export default Home;