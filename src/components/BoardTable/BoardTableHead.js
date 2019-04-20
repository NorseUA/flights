import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import { FormattedMessage } from 'react-intl.macro';
import TableHead from '@material-ui/core/TableHead';
import BoardTableCell from './BoardTableCell';
import tableColumnsConfig from './tableConfig';

const BoardTableHead = (props) => (
	<TableHead>
		<TableRow>
			{tableColumnsConfig(props.locale).map(item => (
				<BoardTableCell key={item.label}>
					<FormattedMessage id={`table.head.${item.label}`}/>
				</BoardTableCell>
			))}
		</TableRow>
	</TableHead>
);

BoardTableHead.propTypes = {
	locale: PropTypes.string
};

export default BoardTableHead;