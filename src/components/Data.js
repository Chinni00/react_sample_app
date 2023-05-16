import React from 'react'

const Data=(props)=> {
    const {expenses} =props
  return (
    <div>
        {expenses.map((expense)=>{ return [
    <div className="expense-item">
    <div key={expense.id}>{expense.date.toISOString()}</div>
    <div className="expense-item__description">
      <h2 >{expense.title}</h2>
      <h2>{expense.location}</h2>
      <div className="expense-item__price">${expense.price}</div>
    </div>

   </div>
   ]})}
    </div>
  )
}
export default  Data;
