import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount}, {createdAt}</p>
        <Link to={`/edit/${id}`}>
            edit
        </Link>
    </div>
);

export default connect()(ExpenseListItem);
