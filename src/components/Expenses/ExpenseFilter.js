import React from 'react'

export default function ExpenseFilter(props) {

    const dropdownChangerHandler =(e)=>{
        props.onChangeFilter(e.target.value)
    }

  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label>filter by year</label>
            <select value={props.selected} onChange={dropdownChangerHandler} >
                <option value="">select year</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>

            </select>

        </div>

    </div>
  )
}
