import React, {  useState } from "react";
import ExpensiveItem from "./components/Expenses/ExpensiveItem";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";

const DUMMY_EXPENSES =[
  {
    id:1,
    date:new Date(2023,4,20),
    title:"Car Insurance",
    price:"240",
    
  },
  {
    id:2,
    title:"Double Cot",
    date:new Date(2024,4,20),
    price:"100",
    
  },
  {
    id:3,
    title:"Fridze",
    date:new Date(2025,4,20),
    price:"89",
    
  },
  {
    id:4,
    title:"2 BHK Flat",
    date:new Date(2026,4,20),
    price:"100000",
    
  },
  

]

 const App=()=> {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const [filteredYear,setFilteredYear] = useState("")

  const additionExpense =(expense)=>{   
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]
    })
    
  }
  
  const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear)
  }
  const filteredExpenses = filteredYear
    ? expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear)
    : expenses;
 
  return (
    <div className="App-header">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <div>
        <NewExpenses onAdditionExpense={additionExpense} />
      </div>
      
      <ExpensiveItem  data={filteredExpenses}  />
      
      
      
    </div>
  );
}

export default App;
