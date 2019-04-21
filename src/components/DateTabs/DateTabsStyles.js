const styles = (theme) => ({
	tabRoot: {
		color: theme.palette.common.gray,
		fontSize: '16px',
		minWidth: '50px',
		borderBottom: `2px solid ${theme.palette.common.gray}`
	},
	tabSelected: {
		color: theme.palette.primary.main
	},
	shortDate: {
		fontSize: '12px',
		marginBottom: '5px'
	}
});

export default styles;
