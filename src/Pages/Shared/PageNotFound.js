import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/bannerbackground2.png'

const PageNotFound = () => {
    return (
        <div>
        <div>
            <img src={banner} alt="" />
        </div>

        {/* <div className='relative lg:top-[-300px] top-[-120px]'> */}
        <div className='absolute top-60 right-[510px]'>
        <div className='mx-auto text-center'>
        <h2 className='lg:text-5xl font-bold text-center'>404!!</h2>
        <h2 className='lg:text-3xl font-semibold text-center'>Page Not Found</h2>
        </div>
       
        </div>
        
    </div>
    );
};

export default PageNotFound;