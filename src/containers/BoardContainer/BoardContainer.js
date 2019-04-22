// Modules
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

// Components
import { Board, SearchBox } from '../../components';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Typography, withStyles } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

// Utils
import { endpoints } from '../../configs';
import { formatDate } from '../../utils/dateFormatters';
import formatFlightsData from '../../utils/formatFlightsData';
import getCloserDates from '../../utils/buildCloserDates';
import callApi from '../../utils/apiClient';
import { defaultTabType } from '../../components/BoardTabs/constants';
import getData from '../../utils/getDataByPath';
import filterFlightsDataByQuery from '../../utils/filterFlightsDataByQuery';

// Styles
import styles from './BoardContainerStyles';

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
			flightsData: null,
			query: ''
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

	fetchFailed = (formattedDate, err) => {
		console.error(err);
		this.setState({
			loading: false,
			flightsData: null,
			currentDate: formattedDate,
			showMessage: true
		});
	};

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
		const { flightsData, currentView } = this.state;

		if (!flightsData || (flightsData[currentView] && !(value in flightsData[currentView]))) {
			this.fetchData(value);
		} else {
			this.setState({ currentDate: value });
		}
	};

	handleCloseMessage = () => this.setState({ showMessage: false });

	handleSearchByQuery = (query) => this.setState({ query });

	getFilteredData = () => {
		const { currentView, currentDate, flightsData, query } = this.state;
		const data = getData(flightsData || [], `${currentView}.${currentDate}`) || [];

		return !!query
			? filterFlightsDataByQuery(data, query)
			: data
	};

	render() {
		const { currentView, currentDate } = this.state;
		const data = this.getFilteredData();

		return (
			<Fragment>
				<Typography variant="h2" color="inherit" className={this.props.classes.mainTitle}>
					<FormattedMessage id="mainTitle"/>
				</Typography>
				<SearchBox handleSearch={this.handleSearchByQuery} />
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

export default injectIntl(withStyles(styles)(BoardContainer));
