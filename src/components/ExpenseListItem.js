import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <h3>{description}</h3>
        <p>amount: {numeral(amount / 100).format('$0,0.00')}</p>
        <p>date: {moment(createdAt).format('MMMM Do, YYYY')}</p>
        <Link to={`/edit/${id}`}>
            edit
        </Link>
    </div>
);

export default connect()(ExpenseListItem);
