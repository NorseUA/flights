// Modules
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Components
import { Table, TableBody } from '@material-ui/core';
import BoardTableHead from './BoardTableHead';
import BoardTableRow from './BoardTableRow';

// Styles
import styles from './BoardTableStyles';

function BoardTable(props) {
	const { classes, flightsData, locale, currentView } = props;

	return (
		<Table className={classes.table}>
			<BoardTableHead locale={locale} className={classes.head}/>
			<TableBody>
				{flightsData.map(flight => (
					<BoardTableRow
						currentView={currentView}
						locale={locale}
						classes={classes}
						data={flight}
						key={flight.ID}
					/>
				))}
			</TableBody>
		</Table>
	);
}

BoardTable.propTypes = {
	locale: PropTypes.string,
	classes: PropTypes.object,
	currentView: PropTypes.string,
	flightsData: PropTypes.array,
};

export default withStyles(styles)(BoardTable);