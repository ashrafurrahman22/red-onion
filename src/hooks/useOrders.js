import { useEffect, useState } from "react";

const useOrders = () =>{
    const [orders, setOrders] = useState([]);

    useEffect( ()=>{
        fetch('https://tranquil-gorge-14030.herokuapp.com/carts')
        .then(res => res.json())
        .then(data => setOrders(data))
    } , [orders])
    return [orders, setOrders];
}

export default useOrders;