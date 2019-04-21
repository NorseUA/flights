const styles = (theme) => ({
	mainTitle: {
		width: '60%',
		margin: '35px auto',
		textAlign: 'left',

		[theme.breakpoints.down('sm')]: {
			width: '95%',
			fontSize: '46px'
		}
	}
});

export default styles;
