import ExpenseItem from "./ExpenseItems";
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    let expenses = props.expenses;
    return (
        // get form friend 
        <Card className="expenses">
            {expenses.map((expense) => {
                return (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
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
}

export default Expenses;