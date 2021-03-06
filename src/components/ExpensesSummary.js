import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import { Message } from 'semantic-ui-react';

const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expensesWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <Message attached>viewing {expenseCount} {expensesWord} totaling {formattedTotal}</Message>
        </div>
    );
};

const mapStatetoProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStatetoProps)(ExpensesSummary);
