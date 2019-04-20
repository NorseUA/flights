import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import BoardTableHead from './BoardTableHead';
import BoardTableRow from './BoardTableRow';

import styles from './BoardTableStyles';

function BoardTable(props) {
	const { classes, flightsData, locale, currentView } = props;

	return (
		<Table className={classes.table}>
			<BoardTableHead locale={locale} />
			<TableBody>
				{flightsData.map(flight => (
					<BoardTableRow
						currentView={currentView}
						locale={locale}
						styles={classes.row}
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