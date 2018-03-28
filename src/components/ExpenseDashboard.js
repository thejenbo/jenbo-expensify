import React from 'react';
import ExpenseList from './ExpenseList';
import expenseListFilters from './ExpenseListFilters';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import { Segment, Divider, Container } from 'semantic-ui-react';

const ExpenseDashBoard = () => (
    <div>
        <h2>expenses dashboard</h2>

        <ExpenseListFilters />

        <Segment>
            <ExpenseList />
        </Segment>
    </div>
);

export default ExpenseDashBoard;
