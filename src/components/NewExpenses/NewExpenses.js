import React from 'react';
import NewExpensesForm from './NewExpensesForm';
import './NewExpenses.css';

const NewExpenses = (props) =>{

    const saveExpenseDataHandler = (enteredExpendeData) => {
        const expendeData ={
            ...enteredExpendeData,
            Id: Math.random().toString()
        }
        props.onAddExpense(expendeData);
    }

    return(
        <div className="new-expense">
            <NewExpensesForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};
export default NewExpenses;