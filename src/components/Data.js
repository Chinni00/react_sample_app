import "./Data.css"

const Data = (props) => {
  let {data} = props;
  
  
  
  return(
    <div className="UI">
      {data.length===0 ? <h2 className="warning">No data found</h2> :
      data.map((expense)=>{  return [
        <div key={expense.id}  className="expense-item" >
           <div className="expense-item__price">
            {expense.date.toLocaleString("en-US",{month:"long"})}
            {expense.date.toLocaleString("en-US",{day:"2-digit"})}<br />
            &nbsp;{expense.date.getFullYear()}

           </div>
           <div className="" >
              <h1 className="expense-item__description" >{expense.title}</h1>
              
           </div>
           <div className="expense-item__price">${expense.price}</div>
        </div>
      ]
        
      })
      
      }
    </div>
  )
};
export default Data;
