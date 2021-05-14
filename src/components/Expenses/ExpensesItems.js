import React from 'react';
import ExpenseDate from './ExpensesDate';
import Card from '../UI/Card';
import './ExpensesItem.css';


const ExpenseItme = (props) => {
    // const expenseDate = new Date(2021, 4,10);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('updated');
    // };

    return (
        <Card className="expense-item">
            {/* <div>{props.date.toDateString()}</div> */}
            <ExpenseDate date = {props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button>             */}
        </Card>        
    );
};
export default ExpenseItme;