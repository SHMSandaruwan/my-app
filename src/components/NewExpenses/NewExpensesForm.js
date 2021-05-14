import React,{useState} from 'react';
import './NewExpensesForm.css';

const NewExpensesForm = (props) => {

    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState(''); 
    // alternative way to do using object 
    
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangeHandler = (event)=> {
        setenteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((prevStats) => {
        //     return{ ...prevStats, enteredTitle: event.target.value}
        // })
    };
   
    const amountChangeHandler = (event)=> {
        setenteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    };
    
    const dateChangeHandler = (event)=> {
        setenteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseDate);
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">ADD EXPENSES</button>
            </div>
        </form>        
    );      
};
export default NewExpensesForm;