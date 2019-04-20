import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core';
import styles from '../DateTabs/DateTabsStyles';

const renderLabel = (date, label, classes) => {
	const shortDate = date.replace(/-/, '/').split('-')[0];
	return (
		<div>
			<div className={classes.shortDate}>{shortDate}</div>
			<div>{label}</div>
		</div>
	);
};

const DateTabs = props => {
	return (
		<Tabs indicatorColor="primary" value={props.currentDate} onChange={props.changeDate}>
			{props.dates
				.map(({ date, label }) => (
					<Tab
						classes={props.classes}
						key={date}
						value={date}
						label={renderLabel(date, label, props.classes)}
					/>
				))}
		</Tabs>
	);
};

DateTabs.propTypes = {
	currentDate: PropTypes.string,
	changeDate: PropTypes.func,
	classes: PropTypes.object,
	dates: PropTypes.array
};

export default withStyles(styles)(DateTabs);