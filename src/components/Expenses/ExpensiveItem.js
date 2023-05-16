import React from "react";
import Data from "../Data";
import "./ExpensiveItem.css";

 const ExpensiveItem=(props)=> {
  const {expenses} = props;
  
  return (
    <div>
    <Data expenses={expenses}/>
    
    </div>
  );
}
export default  ExpensiveItem;
