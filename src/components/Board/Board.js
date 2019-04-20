import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BoardTabs, DateTabs } from '../../components';

class Board extends Component {
	render() {
		console.log(this.props.data);
		return (
			<div>
				<BoardTabs
					changeView={this.props.changeView}
					currentView={this.props.currentView}
				/>
				<DateTabs
					changeDate={this.props.changeDate}
					currentDate={this.props.currentDate}
					dates={this.props.dates}
				/>
			</div>
		);
	}
}

Board.propTypes = {
	changeView: PropTypes.func,
	currentView: PropTypes.string,
	changeDate: PropTypes.func,
	currentDate: PropTypes.string,
	dates: PropTypes.array,
	data: PropTypes.array
};

export default Board;