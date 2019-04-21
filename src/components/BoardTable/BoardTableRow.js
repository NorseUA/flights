// Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { TableRow } from '@material-ui/core';
import BoardTableCell from './BoardTableCell';
import { FormattedMessage } from 'react-intl.macro';
import { FormattedTime } from 'react-intl';

// Utils
import getData from '../../utils/getDataByPath';
import getStatuses from '../../utils/getStatuses';
import getTableColumnsConfig, { tableColumnNames } from '../../utils/getTableConfig';

class BoardTableRow extends Component {
	formatStatus = () => {
		const statuses = getStatuses(this.props.currentView);
		const status = statuses[this.props.data.status] || { label: this.props.data.status };
		const statusTime = status.timeKey ? getData(this.props.data, status.timeKey) : null;

		return (
			<>
				<FormattedMessage id={`flight.status.${status.label}`}/>&nbsp;{statusTime && (
				<FormattedTime value={statusTime}/>)}
			</>
		);
	};

	renderContent = ({ label, dataKey, additional }) => {
		switch (label) {
			case tableColumnNames.STATUS: {
				return this.formatStatus();
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
			<TableRow className={this.props.styles}>
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
	styles: PropTypes.string
};

export default BoardTableRow;