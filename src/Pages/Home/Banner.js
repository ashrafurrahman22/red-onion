import React from 'react';
import '../../Styles/Banner.css'
import bg from  '../../assets/bannerbackground2.png';

const Banner = () => {
    return (
        <div>
            <div>
                <img src={bg} alt="" />
            </div>

            <div className='relative lg:top-[-340px] top-[-120px]'>
            <h2 className='lg:text-4xl font-semibold text-center'>Best Food Waiting for your Belly</h2>
            <div className='text-center py-6'>
            <form>
            <input className='border border-black lg:py-2 lg:px-10 rounded-full mr-2' type="text" placeholder='Search' />
            <input className='btn bg-red-600 lg:w-28  text-white lg:font-medium normal-case rounded-full' type="submit" value="Search" />
            </form>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;