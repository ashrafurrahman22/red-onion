import { useEffect, useState } from "react";

const useFoods = () =>{
    const [foods, setFoods] = useState([]);

    useEffect( ()=>{
        fetch('https://good-tan-cheetah-vest.cyclic.app/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    } , [foods])
    return [foods, setFoods];
}

export default useFoods; 