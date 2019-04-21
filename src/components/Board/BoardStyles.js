const styles = (theme) => ({
	wrapper: {
		width: '80%',
		margin: '50px auto 0',

		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	},
	datePanel: {
		display: 'flex',
		alignItems: 'baseline',
		paddingBottom: '25px',
	},
	contentWrapper: {
		padding: '25px',
		backgroundColor: theme.palette.common.white
	},
	noFound: {
		height: '50vh',
		lineHeight: '35vh',
		fontSize: '36px'
	}
});

export default styles;
