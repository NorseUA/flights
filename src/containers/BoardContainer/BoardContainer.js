import React, { Component } from 'react';
import { Board } from '../../components';
import callApi from '../../utils/apiClient';
import { endpoints } from '../../configs';
import formatDate from '../../utils/formatDate';
import formatFlightsData from '../../utils/formatFlightsData';
import { defaultTabType } from '../../components/BoardTabs/constants';

class BoardContainer extends Component {
	// For this sort of things better solution is to use state managers like Mobx/Redux
	state = {
		currentDate: formatDate(),
		currentView: defaultTabType,
		flightsData: null
	};

	componentDidMount() {
		this.fetchData(this.state.currentDate);
	}

	fetchData = (formattedDate) => {
		callApi({ endpoint: `${endpoints.FLIGHTS}/${formattedDate}` })
			.then(data => this.setState({
				flightsData: formatFlightsData(data.body),
				currentDate: formattedDate
			}));
	};

	changeView = (event, value) => {
		this.setState({ currentView: value });
	};

	render() {
		const { currentView, currentDate, flightsData } = this.state;
		const data = (flightsData && flightsData[currentView] && flightsData[currentView][currentDate]) || [];
		return (
			<Board
				changeView={this.changeView}
				currentView={currentView}
				data={data}
			/>
		);
	}
}

export default BoardContainer;