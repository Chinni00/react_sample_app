import React, { useState } from 'react'
import "./ExpensesForm.css"

export default function ExpensesForm() {
    
    const eventHandler =(e)=>{
        console.log(e.target.value)
    }

  return (
    <div>
        <form >
            <div>
            <label>Expense Title:</label>
            <input placeholder='enter title' onChange={eventHandler} />
            </div>
            <div>
            <label>Expense price:</label>
            <input type='number' min="1" step="0.1" placeholder='enter price' />
            </div>
            <div>
            <label>Date:</label>
            <input type='date' />
            </div>
            <button className='btn'>Add Event</button>
        </form>
    </div>
  )
}
