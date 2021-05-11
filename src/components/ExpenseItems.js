import './ExpenseItem.css';

function ExpenseItme(props) {
    // const expenseDate = new Date(2021, 4,10);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
    return (
        <div className="expense-item">
            <div>{props.date.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>            
        </div>        
    );
}

export default ExpenseItme;