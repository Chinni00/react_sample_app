import React from "react";
import Data from "./Data";
import "./ExpensiveItem.css";

export default function ExpensiveItem(props) {
  const {expenses} = props;
  
  return (
    <div>
    <Data expenses={expenses}/>
    
    </div>
  );
}
