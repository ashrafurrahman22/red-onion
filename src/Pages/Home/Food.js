import React, { useEffect, useState } from 'react';
import useFoods from '../../hooks/useFoods';
import SingleFood from './SingleFood';

const Food = () => {

    const [foods] = useFoods();

    const breakfast = foods.filter(food=>food?.type === "breakfast")

    const launch = foods.filter(food=>food?.type === "launch")

    const dinner = foods.filter(food=>food?.type === "dinner")


    const [btn, setBtn] = useState("breakfast");

    const handleClick = (result) =>{
        setBtn(result)
    }

    return (
        <div style={{fontFamily:"poppins"}} className='py-4'>
            <div style={{
                    fontFamily:"poppins",
                    fontSize:"18px"
                }}
             className='flex justify-center pt-8 gap-10'>
                <button  onClick={()=>handleClick("breakfast")} className={`${btn==="breakfast" ? "border-b-2 border-red-500" : "border-none"}`}>Breakfast</button>
                <button onClick={()=>handleClick("launch")} className={`${btn==="launch" ? "border-b-2 border-red-500" : "border-none"}`}>Launch</button>
                <button onClick={()=>handleClick("dinner")} className={`${btn==="dinner" ? "border-b-2 border-red-500" : "border-none"}`}>Dinner</button>
            </div>

            <div className='grid grid-cols-3 px-14 gap-10 py-10'>
                {btn === "breakfast" &&
                    breakfast.map(food => <SingleFood
                    key={food._id}
                    food={food}
                    ></SingleFood> )
                }
                {btn === "launch" &&
                    launch.map(food => <SingleFood
                    key={food._id}
                    food={food}
                    ></SingleFood> )
                }
                {btn === "dinner" &&
                    dinner.map(food => <SingleFood
                    key={food._id}
                    food={food}
                    ></SingleFood> )
                }
            </div>

        </div>
    );
};

export default Food;