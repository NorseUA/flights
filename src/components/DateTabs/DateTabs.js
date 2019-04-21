// Modules
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

// Components
import { Tabs, Tab } from '@material-ui/core';

// Styles
import styles from '../DateTabs/DateTabsStyles';

const renderIcon = (date, className) => {
	const shortDate = date.replace(/-/, '/').split('-')[0];
	return (<span className={className}>{shortDate}</span>);
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
						icon={renderIcon(date, classes.shortDate)}
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
