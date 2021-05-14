import React,{useState} from 'react';
import NewExpensesForm from './NewExpensesForm';
import './NewExpenses.css';

const NewExpenses = (props) =>{

    const [isEditing, setisEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpendeData) => {
        const expendeData ={
            ...enteredExpendeData,
            Id: Math.random().toString()
        };
        props.onAddExpense(expendeData);
        setisEditing(false);
    };
    
    const startEditingHandler = () => {
        setisEditing(true);
    };

    const stopEditingHandler = () => {
        setisEditing(false);
    };

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>ADD NEW EXPENSES</button>}
            {isEditing && <NewExpensesForm onSaveExpenseData={saveExpenseDataHandler}  onCancel={stopEditingHandler}/>}
        </div>
    );
};
export default NewExpenses;