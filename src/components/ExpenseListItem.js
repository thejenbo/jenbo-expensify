import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import { Table } from 'semantic-ui-react';


const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <Table.Row>
        <Table.Cell>{description}</Table.Cell>
        <Table.Cell>{numeral(amount / 100).format('$0,0.00')}</Table.Cell>
        <Table.Cell>{moment(createdAt).format('MMMM Do, YYYY')}</Table.Cell>
        <Table.Cell>
            <Link to={`/edit/${id}`}>
                edit
            </Link>
        </Table.Cell>
    </Table.Row>
);

export default connect()(ExpenseListItem);
