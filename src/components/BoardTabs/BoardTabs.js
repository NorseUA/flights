// Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Components
import { FormattedMessage } from 'react-intl';
import { Tabs, Tab } from '@material-ui/core';

// Utils
import { tabTypes } from './constants';

// Styles
import styles from './BoardTabsStyles';

class BoardTabs extends Component {
	renderTab = (classes, type) => (
		<Tab
			value={type}
			label={(<FormattedMessage id={`tab.${type}.label`}/>)}
			classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
		/>
	);

	render() {
		const { classes } = this.props;

		return (
			<Tabs
				onChange={this.props.changeView}
				value={this.props.currentView}
				variant="fullWidth"
				TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
				classes={{ root: classes.wrapper }}
			>
				{this.renderTab(classes, tabTypes.DEPARTURE)}
				{this.renderTab(classes, tabTypes.ARRIVAL)}
			</Tabs>
		);
	}
}

BoardTabs.propTypes = {
	classes: PropTypes.object.isRequired,
	changeView: PropTypes.func.isRequired,
	currentView: PropTypes.string.isRequired,
};

export default withStyles(styles)(BoardTabs);
