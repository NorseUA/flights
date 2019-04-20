import React, { Component } from 'react';
import { Board } from '../../components';
import callApi from '../../utils/apiClient';
import { endpoints } from '../../configs';
import formatDate from '../../utils/formatDate';
import formatFlightsData from '../../utils/formatFlightsData';
import { defaultTabType } from '../../components/BoardTabs/constants';

class BoardContainer extends Component {
	// For this sort of things better solution is to use state managers like Mobx/Redux etc.
	state = {
		currentDate: formatDate(new Date(2019, 3, 10)),
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

	changeDate = (event, value) => {
		this.setState({ currentDate: value });
	};

	buildDates = () => {
		const { flightsData, currentView } = this.state;
		const currentViewData = flightsData && flightsData[currentView];
		const dates = Object.keys(currentViewData || {});

		return dates
			.splice(0, 3)
			.map(key => ({ date: key, label: key }));
	};

	render() {
		const { currentView, currentDate, flightsData } = this.state;
		const data = (flightsData && flightsData[currentView] && flightsData[currentView][currentDate]) || [];

		return (
			<Board
				changeView={this.changeView}
				changeDate={this.changeDate}
				currentView={currentView}
				currentDate={currentDate}
				data={data}
				dates={this.buildDates()}
			/>
		);
	}
}

export default BoardContainer;