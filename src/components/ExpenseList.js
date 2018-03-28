import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ExpensesSummary from './ExpensesSummary';
import selectExpenses from '../selectors/expenses';
import { Table } from 'semantic-ui-react';

const ExpenseList = (props) => (
    <div>
        <ExpensesSummary />
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>description</Table.HeaderCell>
                    <Table.HeaderCell>amount</Table.HeaderCell>
                    <Table.HeaderCell>date</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {props.expenses.map(
                    (expense) => (
                        <ExpenseListItem key={expense.id} {...expense} />
                    )
                )}
            </Table.Body>
        </Table>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);
