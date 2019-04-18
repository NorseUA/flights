import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BoardTabs } from '../../components';

class Board extends Component {
	render() {
		console.log(this.props.data);
		return (
			<div>
				<BoardTabs
					changeView={this.props.changeView}
					currentView={this.props.currentView}
				/>
			</div>
		);
	}
}

Board.propTypes = {
	changeView: PropTypes.func,
	currentView: PropTypes.string,
	data: PropTypes.array
};

export default Board;