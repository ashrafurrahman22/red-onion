import { useEffect, useState } from "react";

const useFoods = () =>{
    const [foods, setFoods] = useState([]);

    useEffect( ()=>{
        fetch('https://tranquil-gorge-14030.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    } , [foods])
    return [foods, setFoods];
}

export default useFoods;