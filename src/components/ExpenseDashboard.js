import React from 'react';
import ExpenseList from './ExpenseList';
import expenseListFilters from './ExpenseListFilters';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoard = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoard;
