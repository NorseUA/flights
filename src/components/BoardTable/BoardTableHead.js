// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { TableRow,TableHead } from '@material-ui/core';
import { FormattedMessage } from 'react-intl.macro';
import BoardTableCell from './BoardTableCell';

// Utils
import getTableColumnsConfig from '../../utils/getTableConfig';

const BoardTableHead = (props) => (
	<TableHead className={props.className}>
		<TableRow>
			{getTableColumnsConfig(props.locale).map(item => (
				<BoardTableCell key={item.label}>
					<FormattedMessage id={`table.head.${item.label}`}/>
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