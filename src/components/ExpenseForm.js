import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Form } from 'semantic-ui-react';

export default class Expenseform extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            datePickerFocused: false,
            buttonText: props.buttonText ? props.buttonText : 'add expense',
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(({
                amount
            }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({
                createdAt
            }))
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({datePickerFocused: focused}));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ formError: 'Please provide a description and amount'}));
        } else {
            this.setState(() => ({ formError: ''}));

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Input
                            type="text"
                            placeholder="description"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                            autoFocus
                        />
                        <Form.Input
                            type="text"
                            placeholder="amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                        <SingleDatePicker
                            date={this.state.createdAt}
                            focused={this.state.datePickerFocused}
                            onFocusChange={this.onFocusChange}
                            onDateChange={this.onDateChange}
                            numberOfMonths={1}
                            isOutsideRange={() => {false}}
                        />
                    </Form.Group>
                    <Form.Group>
                        <textarea
                            placeholder="Add a note for your expense"
                            value={this.state.note}
                            onChange={this.onNoteChange}
                        >
                        </textarea>
                    </Form.Group>
                    <Form.Group>
                        <Form.Button>
                            {this.state.buttonText}
                        </Form.Button>
                    </Form.Group>
                </Form>
                {this.state.formError && <p>{this.state.formError}</p>}
            </div>
        );
    };
};
