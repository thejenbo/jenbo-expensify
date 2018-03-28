import React from 'react';
import ExpenseList from './ExpenseList';
import expenseListFilters from './ExpenseListFilters';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import { Segment, Divider } from 'semantic-ui-react';

const ExpenseDashBoard = () => (
    <div>
        <ExpenseListFilters />

        <Segment>
            <ExpenseList />
        </Segment>
    </div>
);

export default ExpenseDashBoard;
