import React , {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props) {
    // const month=props.date.toLocalString('en-US',{month:'long'});
    // const day=props.date.toLocalString('en-US',{day:'2-digit'});
    // const year=props.date.gatFullYear();
    const [title,setTitle]=useState(props.title);
   
    const clickHandler = () => {
      console.log('Button is clicked');
      setTitle('Updated');

    }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click</button>
    </Card>
  );
}
export default ExpenseItem;
