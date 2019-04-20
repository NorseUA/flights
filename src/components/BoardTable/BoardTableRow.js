import React from 'react';
import PropTypes from 'prop-types';
import BoardTableCell from './BoardTableCell';
import TableRow from '@material-ui/core/TableRow';
import tableColumnsConfig from './tableConfig';

const getData = (obj, path) => {
	if (path in obj) { return obj[path]; }

	if (path.includes('.')) {
		const deepPath = path.split('.');

		return deepPath.reduce((acc, key) => {
			if ((acc instanceof Object)) {
				if(key in acc) {
					acc = acc[key];
				} else {
					acc = null;
				}
			}
			return acc;
		}, obj);
	}
};

const BoardTableRow = (props) => (
	<TableRow className={props.styles}>
		{tableColumnsConfig(props.locale, props.currentView)
			.map(item => {
				const data = getData(props.data, item.dataKey);
				const additional = item.additional ? getData(props.data, item.additional) : '';

				return (
					<BoardTableCell key={item.label}>{`${data}${additional}`}</BoardTableCell>
				)
			})
		}
	</TableRow>
);


BoardTableRow.propTypes = {
	locale: PropTypes.string,
	currentView: PropTypes.string,
	data: PropTypes.object,
	styles: PropTypes.string
};

export default BoardTableRow;