import { useEffect, useState } from "react";

const useFoodDetails = foodId =>{
    const [data, setData] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/foods/${foodId}`
        fetch(url)
        .then(res => res.json())
        .then(result => setData(result))
    },[foodId, data])
    return [data, setData] ;
}

export default useFoodDetails;