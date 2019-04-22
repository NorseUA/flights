// Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

// Components
import { LinearProgress } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { BoardTable, BoardTabs, CustomDatePicker, DateTabs } from '../../components';

// Styles
import styles from './BoardStyles';

class Board extends Component {
	renderNoFlightsMessage = () => (
		<div className={this.props.classes.noFound}>
			<FormattedMessage id="flights.noFound"/>
		</div>
	);

	renderContent = () => (this.props.data && this.props.data.length)
		? (<BoardTable currentView={this.props.currentView} flightsData={this.props.data} locale={this.props.locale}/>)
		: this.renderNoFlightsMessage();

	render() {
		const { classes, changeView, currentView, changeDate, currentDate, dates, loading } = this.props;
		return (
			<div className={classes.wrapper}>
				<BoardTabs
					changeView={changeView}
					currentView={currentView}
				/>
				<div className={classes.contentWrapper}>
					<div className={classes.datePanel}>
						<CustomDatePicker
							changeDate={changeDate}
							currentDate={currentDate}
						/>
						<DateTabs
							changeDate={changeDate}
							currentDate={currentDate}
							dates={dates}
						/>
					</div>
					{
						loading
							? (<LinearProgress/>)
							: (this.renderContent())
					}
				</div>
			</div>
		);
	}
}

Board.propTypes = {
	locale: PropTypes.string,
	loading: PropTypes.bool,
	classes: PropTypes.object,
	changeView: PropTypes.func,
	currentView: PropTypes.string,
	changeDate: PropTypes.func,
	currentDate: PropTypes.string,
	dates: PropTypes.array,
	data: PropTypes.array
};

export default withStyles(styles)(Board);
