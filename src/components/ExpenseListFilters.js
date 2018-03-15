import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        datePickerFocused: null,
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (datePickerFocused) => {
        this.setState(() => ({ datePickerFocused }))
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text} onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />

                <select
                    selected="{props.filters.sortBy}"
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >
                    <option value="amount">amount</option>
                    <option value="date">date</option>
                </select>

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
