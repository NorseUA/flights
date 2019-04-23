// Modules
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Components
import { FormattedMessage } from 'react-intl';
import { Tabs, Tab } from '@material-ui/core';

// Utils
import { tabTypes } from './constants';

// Styles
import styles from './BoardTabsStyles';

const BoardTabs = ({ classes, currentView, changeView }) => {
	const renderTab = (classes, type) => (
		<Tab
			value={type}
			label={(<FormattedMessage id={`tab.${type}.label`} defaultMessage={type} />)}
			classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
		/>
	);

	return (
		<Tabs
			onChange={changeView}
			value={currentView}
			variant="fullWidth"
			TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
			classes={{ root: classes.wrapper }}
		>
			{renderTab(classes, tabTypes.DEPARTURE)}
			{renderTab(classes, tabTypes.ARRIVAL)}
		</Tabs>
	);
};


BoardTabs.propTypes = {
	classes: PropTypes.object.isRequired,
	changeView: PropTypes.func.isRequired,
	currentView: PropTypes.string.isRequired,
};

export default withStyles(styles)(BoardTabs);
