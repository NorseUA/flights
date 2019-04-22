// Modules
import React, { Component } from 'react';
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

class BoardTableRow extends Component {
	formatStatus = (dataKey) => {
		const { data, currentView } = this.props;
		const statuses = getStatuses(currentView);
		const status = statuses[data[dataKey]] || { label: data[dataKey] };
		const statusTime = status.timeKey ? getData(data, status.timeKey) : null;

		return (
			<>
				<FormattedMessage id={`flight.status.${status.label}`}/>&nbsp;{statusTime && (
				<FormattedTime value={statusTime}/>)}
			</>
		);
	};

	renderTerminal = (dataKey) => {
		const { data, classes } = this.props;
		const terminal = getData(data, dataKey) || '';
		const color = getTerminalColor(terminal);

		return (
			<div className={`${classes.terminal} ${classes[color]}`}>{terminal}</div>
		);
	};

	renderContent = ({ label, dataKey, additional }) => {
		switch (label) {
			case tableColumnNames.TERMINAL: {
				return this.renderTerminal(dataKey);
			}
			case tableColumnNames.STATUS: {
				return this.formatStatus(dataKey);
			}
			case tableColumnNames.TIME: {
				const time = getData(this.props.data, dataKey);
				return (<FormattedTime value={time}/>);
			}
			default: {
				const data = getData(this.props.data, dataKey);
				const additionalData = additional ? getData(this.props.data, additional) : '';
				return `${data}${additionalData}`;
			}
		}
	};

	render() {
		const tableConfig = getTableColumnsConfig(this.props.locale, this.props.currentView);

		return (
			<TableRow className={this.props.classes.row}>
				{tableConfig
					.map(item => (
							<BoardTableCell key={item.label}>
								{this.renderContent(item)}
							</BoardTableCell>
						)
					)
				}
			</TableRow>
		);
	}
}

BoardTableRow.propTypes = {
	locale: PropTypes.string,
	currentView: PropTypes.string,
	data: PropTypes.object,
	classes: PropTypes.object
};

export default BoardTableRow;