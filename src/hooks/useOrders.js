import { useEffect, useState } from "react";

const useOrders = () =>{
    const [orders, setOrders] = useState([]);

    useEffect( ()=>{
        fetch('https://good-tan-cheetah-vest.cyclic.app/carts')
        .then(res => res.json())
        .then(data => setOrders(data))
    } , [orders])
    return [orders, setOrders];
}

export default useOrders;