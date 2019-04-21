import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#1eb7ee',
			contrastText: '#fff'
		},
		secondary: {
			main: '#73d2f0',
			contrastText: '#fff'
		},
		common: {
			black: '#000',
			white: '#fff',
			gray: '#b8b9b9'
		},
		background: {
			default: 'rgba(0,102,135,.1)'
		}
	}
});

export default theme;