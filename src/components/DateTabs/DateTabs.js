import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const DateTabs = props => {
	return (
		<Tabs value={props.currentDate} onChange={props.changeDate}>
			{props.dates
				.map(({ date, label }) => (
					<Tab key={date} value={date} label={label} />
				))}
		</Tabs>
	);
};

DateTabs.propTypes = {
	currentDate: PropTypes.string,
	changeDate: PropTypes.func,
	dates: PropTypes.array
};

export default DateTabs;