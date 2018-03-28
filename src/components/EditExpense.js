import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { Button, Header } from 'semantic-ui-react';

const EditExpense = (props) => {
    return (
        <div>
            <Header size="large">edit expense</Header>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(startEditExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
                buttonText="update"
            />
            <Button color="red" onClick={() => {
				props.dispatch(startRemoveExpense({ id: props.expense.id }))
				props.history.push('/');
            }}>remove</Button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
    	expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpense);
