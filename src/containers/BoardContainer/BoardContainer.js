// Modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

// Components
import { Board } from '../../components';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { FormattedMessage } from 'react-intl.macro';

// Utils
import { endpoints } from '../../configs';
import { formatDate } from '../../utils/dateFormatters';
import formatFlightsData from '../../utils/formatFlightsData';
import getCloserDates from '../../utils/buildCloserDates';
import callApi from '../../utils/apiClient';
import { defaultTabType } from '../../components/BoardTabs/constants';

class BoardContainer extends Component {
	// For this sort of things better solution is to use state managers like Mobx/Redux etc.
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			showMessage: false,
			currentDate: formatDate(),
			currentView: defaultTabType,
			closerDates: getCloserDates(props.intl.messages),
			flightsData: null
		};
	}

	componentDidMount() {
		this.fetchData(this.state.currentDate);
	}

	fetchSucceeded = (formattedDate, data) => this.setState({
		loading: false,
		flightsData: formatFlightsData(data.body),
		currentDate: formattedDate
	});

	fetchFailed = (formattedDate, err) => this.setState({
		loading: false,
		flightsData: null,
		currentDate: formattedDate,
		showMessage: true
	});

	fetchData = (formattedDate) => {
		this.setState({ loading: true });

		callApi({ endpoint: `${endpoints.FLIGHTS}/${formattedDate}` })
			.then((data) => {
				if (data && data.error && data.error.code === 200) {
					return this.fetchSucceeded(formattedDate, data)
				}
				return this.fetchFailed(formattedDate, data);
			})
	};

	changeView = (event, value) => {
		this.setState({ currentView: value });
	};

	changeDate = (event, value) => {
		const { flightsData = {}, currentView } = this.state;

		if (flightsData[currentView] && !(value in flightsData[currentView])) {
			this.fetchData(value);
		} else {
			this.setState({ currentDate: value });
		}
	};

	handleCloseMessage = () => this.setState({ showMessage: false });

	render() {
		const { currentView, currentDate, flightsData } = this.state;
		const data = (flightsData && flightsData[currentView] && flightsData[currentView][currentDate]) || [];

		return (
			<Fragment>
				<Board
					changeView={this.changeView}
					changeDate={this.changeDate}
					currentView={currentView}
					currentDate={currentDate}
					data={data}
					dates={this.state.closerDates}
					locale={this.props.intl.locale}
					loading={this.state.loading}
				/>
				<Dialog
					open={this.state.showMessage}
					onClose={this.handleCloseMessage}
				>
					<DialogTitle><FormattedMessage id="error"/></DialogTitle>
					<DialogContent>
						<DialogContentText>
							<FormattedMessage id="error.defaultMessage"/>
						</DialogContentText>
					</DialogContent>
				</Dialog>
			</Fragment>
		);
	}
}

BoardContainer.propTypes = {
	intl: PropTypes.object
};

export default injectIntl(BoardContainer);
