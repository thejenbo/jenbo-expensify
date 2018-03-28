import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { Form } from 'semantic-ui-react';

class ExpenseListFilters extends React.Component {
    state = {
        datePickerFocused: null,
    };

    onFilterChange = (e, { value }) => {
        if (value === 'date') {
            this.props.dispatch(sortByDate());
        } else if (value === 'amount') {
            this.props.dispatch(sortByAmount());
        }
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (datePickerFocused) => {
        this.setState(() => ({ datePickerFocused }))
    };

    options = [
        { key: 'a', text: 'amount', value: 'amount' },
        { key: 'd', text: 'date', value: 'date' },
    ];
    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Input
                            type="text"
                            placeholder="search"
                            value={this.props.filters.text} onChange={(e) => {
                                this.props.dispatch(setTextFilter(e.target.value));
                            }}
                            width={4}
                        />
                        
                        <Form.Select 
                            options={this.options}
                            placeholder="sort by"
                            onChange={this.onFilterChange}
                            width={4}
                        />

                        <Form.Field>
                            <DateRangePicker
                                startDate={this.props.filters.startDate}
                                endDate={this.props.filters.endDate}
                                onDatesChange={this.onDatesChange}
                                onFocusChange={this.onFocusChange}
                                focusedInput={this.state.datePickerFocused}
                                numberOfMonths={1}
                                isOutsideRange={() => {false}}
                                showClearDates={true}
                            /> 
                        </Form.Field>
                    </Form.Group>
                </Form>
            </div>
        );
    };
 };

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);
