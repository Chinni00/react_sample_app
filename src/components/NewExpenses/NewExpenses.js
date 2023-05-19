import React from 'react'
import ExpensesForm from './ExpensesForm'

export default function NewExpenses(props) {

  const addExpense =(expense)=>{
      props.onAdditionExpense(expense)
  }

  return (
    <div>
        <ExpensesForm onAddExpense={addExpense}/>
    </div>
  )
}
