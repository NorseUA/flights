// Modules
import React from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { withStyles } from '@material-ui/core';

// Utils
import { formatDate, parseDate } from '../../utils/dateFormatters';

// Styles
import 'react-day-picker/lib/style.css';
import styles from './CustomDatePickerStyles';
import calendarIcon from '../../icons/calendar-icon.svg';

const CustomDatePicker = ({ currentDate, changeDate, classes }) => {
	const handleDayClick = (date) => {
		const formattedDate = formatDate(date);
		changeDate(null, formattedDate);
	};

	const formatInputValue = (dateString = '') => {
		const dateParts = dateString.split('-').reverse();
		dateParts.pop();
		dateParts[1] = (dateParts[1] > 9) ? dateParts[1] : `0${dateParts[1]}`;
		return dateParts.join('/');
	};

	const renderInput = (pickerProps) => {
		const formattedValue = formatInputValue(pickerProps.value);
		return (
			<div className={classes.inputWrapper}>
				<input
					id="custom-datepicker-input"
					className={classes.input}
					type="text"
					{...pickerProps}
					value={formattedValue}
				/>
				<label htmlFor="custom-datepicker-input">
					<img src={calendarIcon} className={classes.icon} alt=""/>
				</label>
			</div>
		);
	};

	const dateObject = parseDate(currentDate);
	return (
		<DayPickerInput
			value={dateObject}
			component={renderInput}
			dayPickerProps={{
				selectedDays: dateObject,
				onDayClick: handleDayClick
			}}
		/>
	);
};

CustomDatePicker.propTypes = {
	currentDate: PropTypes.string,
	changeDate: PropTypes.func,
	classes: PropTypes.object
};

export default withStyles(styles)(CustomDatePicker);
