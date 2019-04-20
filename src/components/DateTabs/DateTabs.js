import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core';
import styles from '../DateTabs/DateTabsStyles';

const renderIcon = (date, classes) => {
	const shortDate = date.replace(/-/, '/').split('-')[0];
	return (<span className={classes.shortDate}>{shortDate}</span>);
};

const DateTabs = props => {
	const { classes, dates, currentDate, changeDate } = props;

	return (
		<Tabs
			indicatorColor="primary"
			value={currentDate}
			onChange={changeDate}
		>
			{dates
				.map(({ date, label }) => (
					<Tab
						classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
						key={date}
						value={date}
						label={label}
						icon={renderIcon(date, classes) }
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