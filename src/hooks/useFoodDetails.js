import { useEffect, useState } from "react";

const useFoodDetails = foodId =>{
    const [data, setData] = useState({});

    useEffect(()=>{
        const url = `https://tranquil-gorge-14030.herokuapp.com/foods/${foodId}`
        fetch(url)
        .then(res => res.json())
        .then(result => setData(result))
    },[foodId, data])
    return [data, setData] ;
}

export default useFoodDetails;