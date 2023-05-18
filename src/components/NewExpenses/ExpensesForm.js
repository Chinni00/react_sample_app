import React, { useState } from 'react'
import "./ExpensesForm.css"

export default function ExpensesForm() {

      const [enteredTitle , setEnteredTitle] = useState("");
      const [enteredPrice , setEnteredPrice] = useState("");
      const [enteredDate , setEnteredDate] = useState("");

//    const [userInput,setUserInput]= useState({
//     enteredTitle:"",
//     enteredPrice:"",
//     enteredDate:""
//    })
    const  enteredTitleHandler=(e)=>{
        
         setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:e.target.value
        // })
        //     another way to update state 
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle:e.target.value}
        // })
    }

    // const [enteredPrice,setEnteredPrice]= useState('')
    const  enteredPriceHandler=(e)=>{
         setEnteredPrice(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredPrice:e.target.value
        // })
        //     another way to update state 
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredPrice:e.target.value}
        // })
    }

    // const [enteredDate,setEnteredDate]= useState('')
    const  enteredDateHandler=(e)=>{
        setEnteredDate(e.target.value)
        //  setUserInput({
        //     ...userInput,
        //     enteredDate:e.target.value
        //  })
        //     another way to update state 
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredDate:e.target.value}
        // })

    }
  return (
    <div>
        <form >
            <div>
            <label>Expense Title:</label>
            <input placeholder='enter title' onChange={enteredTitleHandler} />
            </div>
            <div>
            <label>Expense price:</label>
            <input type='number' min="1" step="0.1" placeholder='enter price' onChange={enteredPriceHandler} />
            </div>
            <div>
            <label>Date:</label>
            <input type='date' onChange={enteredDateHandler}/>
            </div>
            <button type='submit' className='btn'>Add Expense</button>
        </form>
    </div>
  )
}
