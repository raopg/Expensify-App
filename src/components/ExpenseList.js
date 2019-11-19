import React from 'react'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import { connect } from 'react-redux'


const ExpenseList = (props) => (
    <div>
        {props.expenses.map((expense)=>{
            return <ExpenseListItem key={expense.id} expense={expense}/>
        })}
    </div>
)

const mapStateToProps = (state) =>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)

