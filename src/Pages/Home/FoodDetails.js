import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { click } from "@testing-library/user-event/dist/click";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useFoodDetails from "../../hooks/useFoodDetails";
import useOrders from "../../hooks/useOrders";

const FoodDetails = () => {

  const [isClick, setClick] = useState(false);

  const [orders] = useOrders();
  // console.log(orders)
  
  

  const { foodId } = useParams();
  const [data, setData] = useFoodDetails(foodId);

  const { name, img, price } = data;

  let [count, setCount] = useState(1);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if(count<2){
        return count;
    }
    else{
    count = count - 1;
    setCount(count);
}
  }

  // const exists = orders.map(o=>o?.name===data?.name)
  // console.log(exists)

  const handleSubmit = (data, clicked) => {
    console.log(data, clicked)
    setClick(clicked)

    // axios.post('http://localhost:5000/orders', data)
    // .then(response =>{
    //   const {data} = response;
    //   console.log(response);
    //     if(data.insertedId){
    //     toast.success('Successfully Added to Cart');
    //     }
    // });
  };


  return (
    <div
      style={{
        fontFamily: "poppins",
      }}
      className="px-20 py-14"
    >
      <div className="grid grid-cols-2 mx-auto">
        <div className="px-10 flex flex-col justify-center gap-2">
          <h2 className="text-3xl font-semibold ">{name}</h2>
          <p className="text-justify w-3/4 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, iure! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Saepe, iusto?
          </p>
          <div className="flex items-center gap-14">
            <p className="text-2xl py-2 font-medium">${price}</p>
            <div className="border border-slate-600 rounded-full flex justify-center items-center h-10 gap-5 w-28">
              <button onClick={()=>decrementCount()} className="text-3xl px-2">-</button>
              <p>{count}</p>
              <button onClick={()=>incrementCount()} className="text-3xl px-2">+</button>
            </div>
          </div>

          <div>
            
            {
              isClick===false ? <div>
                <button onClick={()=>handleSubmit(data,true )} className="btn bg-red-600 text-white rounded-full normal-case font-medium gap-3 w-28"><FontAwesomeIcon icon={faCartShopping} /> <span>
              Add
            </span></button>
              </div> : <button className="btn bg-red-600 text-white rounded-full normal-case font-medium gap-3 w-28" disabled>Added</button>
            }
            
            
          </div> 
        </div>
        <div className="w-2/3">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
