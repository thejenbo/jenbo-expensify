import React from 'react';
import ExpenseList from './ExpenseList';
import expenseListFilters from './ExpenseListFilters';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import { Segment, Divider, Container, Header } from 'semantic-ui-react';

const ExpenseDashBoard = () => (
    <div>
        <Header size="large">expenses dashboard</Header>

        <ExpenseListFilters />

        <Segment>
            <ExpenseList />
        </Segment>
    </div>
);

export default ExpenseDashBoard;
