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
	}
});

export default styles;
