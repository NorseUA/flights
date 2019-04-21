const styles = (theme) => ({
	boxWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		height: '80px',
		width: '60%',
		margin: '35px auto',

		[theme.breakpoints.down('sm')]: {
			width: '100%',
			height: '50px',
		}
	},
	inputWrapper: {
		position: 'relative',
		flex: '1',
		'& > input': {
			fontSize: '24px',
			border: 'none',
			height: '100%',
			width: '100%',
			padding: '0 0 0 70px',
			outline: 'none'
		},
		'& > img': {
			position: 'absolute',
			left: '15px',
			top: '50%',
			transform: 'translateY(-50%)',
			width: '45px',
		},

		[theme.breakpoints.down('sm')]: {
			'& > input': {
				fontSize: '16px',
				padding: '0 0 0 40px',
				outline: 'none'
			},
			'& > img': {
				left: '5px',
				width: '30px',
			},
		}
	},
	button: {
		fontSize: '26px',
		minWidth: '200px',
		boxShadow: 'unset',
		borderRadius: '0',
		borderTopRightRadius: '80px',
		transition: '.3s ease-in-out',

		'&:hover': {
			borderTopRightRadius: '40px'
		},

		[theme.breakpoints.down('sm')]: {
			fontSize: '18px',
			minWidth: '50px',
			borderRadius: '0',

			'&:hover': {
				borderRadius: '0',
			},
		}
	}
});

export default styles;
