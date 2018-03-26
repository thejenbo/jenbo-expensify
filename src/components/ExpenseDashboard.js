import React from 'react';
import ExpenseList from './ExpenseList';
import expenseListFilters from './ExpenseListFilters';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashBoard = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoard;
