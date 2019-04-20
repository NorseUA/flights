import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import { parseDate, formatDate } from '../../utils/dateFormatters';
import 'react-day-picker/lib/style.css';
import calendarIcon from '../../icons/calendar-icon.svg';
import { withStyles } from '@material-ui/core';
import styles from './CustomDatePickerStyles';

class CustomDatePicker extends Component {
	shouldComponentUpdate(nextProps) {
		return (nextProps.currentDate !== this.props.currentDate);
	}

	handleDayClick = (date) => {
		const formattedDate = formatDate(date);
		this.props.changeDate(null, formattedDate);
	};

	formatInputValue = (dateString = '') => {
		const dateParts = dateString.split('-').reverse();
		dateParts.pop();
		dateParts[1] = (dateParts[1] > 9) ? dateParts[1] : `0${dateParts[1]}`;
		return dateParts.join('/');
	};

	renderInput = (pickerProps) => {
		const formattedValue = this.formatInputValue(pickerProps.value);
		return (
			<div className={this.props.classes.inputWrapper}>
				<input
					id="custom-datepicker-input"
					className={this.props.classes.input}
					type="text"
					{...pickerProps}
					value={formattedValue}
				/>
				<label htmlFor="custom-datepicker-input">
					<img src={calendarIcon} className={this.props.classes.icon} alt=""/>
				</label>
			</div>
		);
	};

	render() {
		const dateObject = parseDate(this.props.currentDate);
		return (
			<DayPickerInput
				value={dateObject}
				component={this.renderInput}
				dayPickerProps={{
					selectedDays: dateObject,
					onDayClick: this.handleDayClick
				}}
			/>
		);
	}
}

CustomDatePicker.propTypes = {
	currentDate: PropTypes.string,
	changeDate: PropTypes.func,
	classes: PropTypes.object
};

export default  withStyles(styles)(CustomDatePicker);
