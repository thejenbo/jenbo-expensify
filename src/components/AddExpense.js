import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const StartAddExpense = (props) => (
    <div>
       <h2>add an expense</h2>
       <ExpenseForm
        onSubmit={(expense) => {
            props.dispatch(startAddExpense(expense));
            props.history.push('/');
        }}
       />
    </div>
);

export default connect()(StartAddExpense);
