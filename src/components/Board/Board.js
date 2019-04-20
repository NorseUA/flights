import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import { BoardTabs, DateTabs, CustomDatePicker, BoardTable } from '../../components';
import styles from './BoardStyles';

class Board extends Component {
	render() {
		console.log(this.props.data);
		return (
			<div className={this.props.classes.wrapper}>
				<BoardTabs
					changeView={this.props.changeView}
					currentView={this.props.currentView}
				/>
				<div className={this.props.classes.contentWrapper}>
					<div className={this.props.classes.datePanel}>
						<CustomDatePicker
							changeDate={this.props.changeDate}
							currentDate={this.props.currentDate}
						/>
						<DateTabs
							changeDate={this.props.changeDate}
							currentDate={this.props.currentDate}
							dates={this.props.dates}
						/>
					</div>
					<BoardTable currentView={this.props.currentView} flightsData={this.props.data} locale={this.props.locale} />
				</div>
			</div>
		);
	}
}

Board.propTypes = {
	locale: PropTypes.string,
	classes: PropTypes.object,
	changeView: PropTypes.func,
	currentView: PropTypes.string,
	changeDate: PropTypes.func,
	currentDate: PropTypes.string,
	dates: PropTypes.array,
	data: PropTypes.array
};

export default withStyles(styles)(Board);