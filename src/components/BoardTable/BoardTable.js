import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const BoardTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
});

let id = 0;

function createData(name, calories, fat, carbs, protein) {
	id += 1;
	return { id, name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const tableColumnsConfig = [
	{
		label: '',
		dataKey: ''
	},
	{
		label: '',
		dataKey: ''
	},
	{
		label: '',
		dataKey: ''
	},
	{
		label: '',
		dataKey: ''
	},
	{
		label: '',
		dataKey: ''
	},
	{
		label: '',
		dataKey: ''
	},

];

function BoardTable(props) {
	const { classes } = props;

	return (
		<Table className={classes.table}>
			<TableHead>
				<TableRow>
					<BoardTableCell></BoardTableCell>
					<BoardTableCell align="right">Calories</BoardTableCell>
					<BoardTableCell align="right">Fat (g)</BoardTableCell>
					<BoardTableCell align="right">Carbs (g)</BoardTableCell>
					<BoardTableCell align="right">Protein (g)</BoardTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map(row => (
					<TableRow className={classes.row} key={row.id}>
						<BoardTableCell component="th" scope="row">
							{row.name}
						</BoardTableCell>
						<BoardTableCell align="right">{row.calories}</BoardTableCell>
						<BoardTableCell align="right">{row.fat}</BoardTableCell>
						<BoardTableCell align="right">{row.carbs}</BoardTableCell>
						<BoardTableCell align="right">{row.protein}</BoardTableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

BoardTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BoardTable);