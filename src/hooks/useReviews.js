import { useEffect, useState } from "react";

const useReviews = () =>{
    const [reviews, setReviews] = useState([]);

    useEffect( ()=>{
        // fetch('https://red-onion-server-production.up.railway.app/reviews')
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    } , [reviews])
    return [reviews, setReviews];
}

export default useReviews;