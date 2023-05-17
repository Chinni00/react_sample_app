import React from "react";
import ExpensiveItem from "./components/Expenses/ExpensiveItem";

 const App=()=> {
  const expenses=[
    {
      id:1,
      date:new Date(2023,4,20),
      title:"Car Insurance",
      price:240,
      
    },
    {
      id:2,
      title:"Double Cot",
      date:new Date(2024,4,20),
      price:100,
      
    },
    {
      id:3,
      title:"Fridze",
      date:new Date(2025,4,20),
      price:89,
      
    },
    {
      id:4,
      title:"2 BHK Flat",
      date:new Date(2026,4,20),
      price:100000,
      
    },

  ]
  return (
    <div className="App-header">
      
      <ExpensiveItem  data={expenses[0]}  />
      <ExpensiveItem  data={expenses[1]}  />
      <ExpensiveItem  data={expenses[2]}  />
      <ExpensiveItem  data={expenses[3]}  />
      
    </div>
  );
}

export default App;
