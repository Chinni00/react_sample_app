import React from 'react'

const Data=(props)=> {

    const {expenses} =props
    const eventHandler = ()=>{
      console.log('clicked!!!')
    }

  return (
    <div>
        {expenses.map((expense)=>{ return [
    <div key={expense.id} className="expense-item">
    <div className="expense-item__price">{expense.date.toDateString()}</div>
    <div className="expense-item__description">
      <h2 >{expense.title}</h2>
      <h2>{expense.location}</h2>
      <div className="expense-item__price">${expense.price}</div>
    </div>
    <button onClick={eventHandler}>Delete</button>
   </div>
   ]})}
    </div>
  )
}
export default  Data;
