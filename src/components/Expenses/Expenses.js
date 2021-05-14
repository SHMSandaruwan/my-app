import React,{useState} from 'react';
import ExpenseItem from "./ExpensesItems";
import ExpensesFilter from "./ExpensesFilter"
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    let item = props.item;

    const [filteredYear, setfilteredYear] = useState(2020);

    const saveExpensesFilterHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    }

    return (              
        // {/* get form friend  */}
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onSaveExpensesFilter = {saveExpensesFilterHandler}/>
            {item.map((item) => {
                return (
                    <ExpenseItem
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                );
            })}
        </Card>
      // <div className = 'expenses'>
      // <ExpenseItme
      //     title={props.expenses[0].title}
      //     amount={props.expenses[0].amount}
      //     date={props.expenses[0].date}
      // />
      // <ExpenseItme
      //     title={props.expenses[1].title}
      //     amount={props.expenses[1].amount}
      //     date={props.expenses[1].date}
      // />
      // <ExpenseItme
      //     title={props.expenses[2].title}
      //     amount={props.expenses[2].amount}
      //     date={props.expenses[2].date}
      // />
      // <ExpenseItme
      //     title={props.expenses[3].title}
      //     amount={props.expenses[3].amount}
      //     date={props.expenses[3].date}
      // />
      // </div>
    );
};
export default Expenses;