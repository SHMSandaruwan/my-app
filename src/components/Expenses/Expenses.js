import React,{useState} from 'react';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    let item = props.item;

    const [filteredYear, setfilteredYear] = useState(2020);

    const saveExpensesFilterHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    };

    const filteredExpenses = item.filter(Expense => {
        return Expense.date.getFullYear().toString() === filteredYear;
    });

    return (              
        //  get form friend
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSaveExpensesFilter={saveExpensesFilterHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList item={filteredExpenses}/>
                {/* {filteredExpenses.length === 0 ? (
                    <p>No Expenses found...</p>
                ):(
                    filteredExpenses.map((item) => 
                    (
                        <ExpenseItem    
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    )
                ))} */}
            
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