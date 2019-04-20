import { withStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

const BoardTableCell = withStyles(theme => ({
	head: {
		color: theme.palette.common.gray,
		fontSize: 16,
	},
	body: {
		fontSize: 18,
	},
	root: {
		border: 'none',
		padding: '18px 10px'
	}
}))(TableCell);

export default BoardTableCell;