import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Board } from '../../components';
import callApi from '../../utils/apiClient';
import { endpoints } from '../../configs';
import formatDate from '../../utils/formatDate';
import formatFlightsData from '../../utils/formatFlightsData';
import { defaultTabType } from '../../components/BoardTabs/constants';
import getCloserDates from "../../utils/buildCloserDates";
import { injectIntl } from "react-intl";

class BoardContainer extends Component {
	// For this sort of things better solution is to use state managers like Mobx/Redux etc.
	constructor(props) {
		super(props);
		this.state = {
			currentDate: formatDate(),
			currentView: defaultTabType,
			closerDates: getCloserDates(props.intl.messages),
			flightsData: null
		};
	}


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
				dates={this.state.closerDates}
			/>
		);
	}
}

BoardContainer.propTypes = {
	intl: PropTypes.object
};

export default injectIntl(BoardContainer);