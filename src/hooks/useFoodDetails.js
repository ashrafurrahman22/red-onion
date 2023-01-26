import { useEffect, useState } from "react";

const useFoodDetails = foodId =>{
    const [data, setData] = useState({});

    useEffect(()=>{
        const url = `https://good-tan-cheetah-vest.cyclic.app/foods/${foodId}`
        fetch(url)
        .then(res => res.json())
        .then(result => setData(result))
    },[foodId, data])
    return [data, setData] ;
}

export default useFoodDetails;