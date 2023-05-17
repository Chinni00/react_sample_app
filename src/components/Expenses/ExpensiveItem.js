import React from "react";
import Data from "../Data";
import "./ExpensiveItem.css";

 const ExpensiveItem=(props)=> {
  let {data} =props
  
  return (
    <div>
     <Data data={data} />
      
    </div>
  );
}
export default  ExpensiveItem;
