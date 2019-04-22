import getTerminalColor, { terminals } from '../../utils/getTerminalColor';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: '35px',
	},
	table: {
		backgroundColor: theme.palette.common.white,
		padding: '30px'
	},
	head: {
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
		'&:hover': {
			boxShadow: '0 5px 10px rgba(0,0,0, 0.2)'
		},
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexWrap: 'wrap',
			height: 'auto'
		}
	},
	terminal: {
		fontWeight: '600',
		borderRadius: `50%`,
		width: '40px',
		height: '40px',
		lineHeight: '40px',
		fontSize: '22px',
		textAlign: 'center',

		[theme.breakpoints.down('sm')]: {
			fontWeight: '500',
			width: '20px',
			height: '20px',
			lineHeight: '20px',
			fontSize: '16px',
		}
	},

	[getTerminalColor(terminals.INTERNATIONAL)]: {
		border: `1px solid ${theme.palette.common[getTerminalColor(terminals.INTERNATIONAL)]}`,
		color: theme.palette.common[getTerminalColor(terminals.INTERNATIONAL)],
	},

	[getTerminalColor(terminals.BUSINESS)]: {
		border: `1px solid ${theme.palette.common[getTerminalColor(terminals.BUSINESS)]}`,
		color: theme.palette.common[getTerminalColor(terminals.BUSINESS)],
	},

	[getTerminalColor(terminals.DOMESTIC)]: {
		border: `1px solid ${theme.palette.common[getTerminalColor(terminals.DOMESTIC)]}`,
		color: theme.palette.common[getTerminalColor(terminals.DOMESTIC)],
	},
});

export default styles;
