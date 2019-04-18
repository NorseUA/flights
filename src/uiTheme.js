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
		}
	}
});

export default theme;