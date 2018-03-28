import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { Header } from 'semantic-ui-react'

const StartAddExpense = (props) => (
    <div>
       <Header size="large">add an expense</Header>
       <ExpenseForm
        onSubmit={(expense) => {
            props.dispatch(startAddExpense(expense));
            props.history.push('/');
        }}
       />
    </div>
);

export default connect()(StartAddExpense);
