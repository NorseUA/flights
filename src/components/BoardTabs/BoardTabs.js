import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl.macro';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs/index';
import Tab from '@material-ui/core/Tab/index';
// styles
import styles from './BoardTabsStyles';
import { tabTypes } from './constants';

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
				TabIndicatorProps={{ style: { backgroundColor: 'transparent'} }}
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
