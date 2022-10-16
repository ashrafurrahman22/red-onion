import React from 'react';
import review1 from '../../assets/review/chef-cook-food-33614.png';
import review2 from '../../assets/review/adult-blur-blurred-background-687824.png';
import review3 from '../../assets/review/architecture-building-city-2047397.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowLeft, faTruck, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import truck from '../../assets/icons/Group 245.png'
import truck1 from '../../assets/icons/Group 204.png'
import notify from '../../assets/icons/Group 1133.png'

const Review = () => {
    return (
        <div className='px-14'>

            <div className='py-4'>
            <h2 className='text-2xl font-medium'>Why you choose us?</h2>
            <p className='py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Commodi libero impedit voluptatibus eius?</p>
            </div>

            <div className="grid grid-cols-3 gap-10">
            <div>
                <div>
                    <img className='w-80' src={review2} alt="" />
                </div>
                <div className='flex gap-3 py-4'>
                    <div>
                    <img className='w-10' src={truck1} alt="" />
                    </div>
                    <div className='w-56'>
                        <h2 className='text-xl font-medium'>Fast Delivery</h2>
                        <p className='text-justify text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit dignissimos odit.</p>
                        <div className='flex my-2 items-center btn bg-red-600 border-none font-light rounded-full w-44'>
                            <p className='pr-2'>see more</p>
                            <FontAwesomeIcon icon={faArrowCircleRight}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img className='w-full' src={review1} alt="" />
                </div>
                <div className='flex gap-3 py-4'>
                    <div>
                    <img className='w-10' src={notify} alt="" />
                    </div>
                    <div className='w-56'>
                        <h2 className='text-xl font-medium'>A Good Auto Responder</h2>
                        <p className='text-justify text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit dignissimos odit.</p>
                        <div className='flex my-2 items-center btn bg-red-600 border-none font-light rounded-full w-44'>
                            <p className='pr-2'>see more</p>
                            <FontAwesomeIcon icon={faArrowCircleRight}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img className='w-80' src={review3} alt="" />
                </div>
                <div className='flex gap-3 py-4'>
                    <div>
                    <img className='w-10' src={truck} alt="" />
                    </div>
                    <div className='w-56'>
                        <h2 className='text-xl font-medium'>Home Delivery</h2>
                        <p className='text-justify text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit dignissimos odit.</p>
                        <div className='flex my-2 items-center btn bg-red-600 border-none font-light rounded-full w-44'>
                            <p className='pr-2'>see more</p>
                            <FontAwesomeIcon icon={faArrowCircleRight}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Review;