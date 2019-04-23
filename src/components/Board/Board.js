// Modules
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

// Components
import { LinearProgress } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { BoardTable, BoardTabs, CustomDatePicker, DateTabs } from '../../components';

// Styles
import styles from './BoardStyles';

const Board = ({ data, locale, classes, changeView, currentView, changeDate, currentDate, dates, loading }) => {
	const renderNoFlightsMessage = () => (
		<div className={classes.noFound}>
			<FormattedMessage id="flights.noFound" defaultMessage="No found" />
		</div>
	);

	const renderContent = () => (data && data.length)
		? (<BoardTable currentView={currentView} flightsData={data} locale={locale}/>)
		: renderNoFlightsMessage();

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
						: (renderContent())
				}
			</div>
		</div>
	);
};

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
