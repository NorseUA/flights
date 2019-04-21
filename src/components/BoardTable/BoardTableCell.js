// Modules
import { withStyles } from '@material-ui/core';

// Components
import { TableCell } from '@material-ui/core';

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
		padding: '18px 10px',
		fontWeight: '300',

		[theme.breakpoints.down('sm')]: {
			flex: '40%',
			maxWidth: '40%'
		}
	}
}))(TableCell);

export default BoardTableCell;