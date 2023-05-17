import React, { useState } from "react";

const Data = (props) => {
  
  const [title,setTitle] = useState(props.data.title);
  function eventHandler(e){
     setTitle('update')
  }

  return(
    <div className="expense-item">
      <div className="expense-item__price" >
      {props.data.date.toLocaleString('US-en',{day:'2-digit'})} &nbsp;
        {props.data.date.toLocaleString('US-en',{month:'long'})}<br></br>
        &nbsp;{props.data.date.getFullYear()}
      </div>
      
        <h1 className="expense-item__description">{title}</h1>
        <div className="expense-item__price">${props.data.price}</div>
       <button onClick={eventHandler} >Update title</button>

    </div>
  )
};
export default Data;
