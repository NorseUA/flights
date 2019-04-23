// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { TableRow } from '@material-ui/core';
import BoardTableCell from './BoardTableCell';
import { FormattedMessage, FormattedTime } from 'react-intl';

// Utils
import getData from '../../utils/getDataByPath';
import getStatuses from '../../utils/getStatuses';
import getTableColumnsConfig, { tableColumnNames } from '../../utils/getTableConfig';
import getTerminalColor from '../../utils/getTerminalColor';

const BoardTableRow = ({ locale, currentView, data, classes }) => {
	const formatStatus = (dataKey) => {
		const statuses = getStatuses(currentView);
		const status = statuses[data[dataKey]] || { label: data[dataKey] };
		const statusTime = status.timeKey ? getData(data, status.timeKey) : null;

		return (
			<>
				<FormattedMessage id={`flight.status.${status.label}`} defaultMessage={status.label} />&nbsp;{statusTime && (
				<FormattedTime value={statusTime}/>)}
			</>
		);
	};

	const renderTerminal = (dataKey) => {
		const terminal = getData(data, dataKey) || '';
		const color = getTerminalColor(terminal);

		return (
			<div className={`${classes.terminal} ${classes[color]}`}>{terminal}</div>
		);
	};

	const renderContent = ({ label, dataKey, additional }) => {
		switch (label) {
			case tableColumnNames.TERMINAL: {
				return renderTerminal(dataKey);
			}
			case tableColumnNames.STATUS: {
				return formatStatus(dataKey);
			}
			case tableColumnNames.TIME: {
				const time = getData(data, dataKey);
				return (<FormattedTime value={time}/>);
			}
			default: {
				const value = getData(data, dataKey);
				const additionalValue = additional ? getData(data, additional) : '';
				return `${value}${additionalValue}`;
			}
		}
	};

	const tableConfig = getTableColumnsConfig(locale, currentView);

	return (
		<TableRow className={classes.row}>
			{tableConfig
				.map(item => (
						<BoardTableCell key={item.label}>
							{renderContent(item)}
						</BoardTableCell>
					)
				)
			}
		</TableRow>
	);
};

BoardTableRow.propTypes = {
	locale: PropTypes.string,
	currentView: PropTypes.string,
	data: PropTypes.object,
	classes: PropTypes.object
};

export default BoardTableRow;
