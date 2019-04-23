// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { TableRow,TableHead } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import BoardTableCell from './BoardTableCell';

// Utils
import getTableColumnsConfig from '../../utils/getTableConfig';

const BoardTableHead = ({ className, locale}) => (
	<TableHead className={className}>
		<TableRow>
			{getTableColumnsConfig(locale).map(item => (
				<BoardTableCell key={item.label}>
					<FormattedMessage id={`table.head.${item.label}`} defaultMessage={item.label} />
				</BoardTableCell>
			))}
		</TableRow>
	</TableHead>
);

BoardTableHead.propTypes = {
	locale: PropTypes.string,
	className: PropTypes.string
};

export default BoardTableHead;