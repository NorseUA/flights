const styles = (theme) => ({
	wrapper: {
		backgroundColor: theme.palette.secondary.main,
		borderTopLeftRadius: '50px',
		borderTopRightRadius: '50px',
	},
	tabRoot: {
		borderTopLeftRadius: '50px',
		borderTopRightRadius: '50px',
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.common.white,
		fontSize: '24px',
		opacity: 1,
	},
	tabSelected: {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.primary.main
	}
});

export default styles;