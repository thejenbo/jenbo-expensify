import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import Button from 'material-ui/Button';

const EditExpense = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(startEditExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
                buttonText="update expense"
            />
            <button variant="raised" color="primary" onClick={() => {
				props.dispatch(startRemoveExpense({ id: props.expense.id }))
				props.history.push('/');
            }}>remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
    	expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpense);
