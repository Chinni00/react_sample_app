import React from "react";
import './ExpensiveItem.css';

export default function ExpensiveItem() {
    const date =new Date(2023 ,4,13)
    const expensiveItemName = 'Car Insurance';
    const expensivePrice = 350.87;
    const locationOfExpenditure = 'Hyderabad'
  return (
    <div>
      <div className="expensive-item">{date.toISOString()}</div>
      <div>
        <h2 className="expensive-item__description">{expensiveItemName}</h2>
        <div className="expensive-item__price">${expensivePrice}</div>
        <div>{locationOfExpenditure}</div>
      </div>
    </div>
  );
}
