// Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';

// Components
import { Header, LangSwitcher } from './components';
import { BoardContainer } from './containers';

// Utils
import theme from './uiTheme';

// Styles
import './App.css';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<div className="App">
					<Header title="Kyiv International Airport">
						<LangSwitcher
							currentLocale={this.props.currentLocale}
							switchLocale={this.props.switchLocale}
						/>
					</Header>
					<BoardContainer/>
				</div>
			</MuiThemeProvider>
		);
	}
}

App.propTypes = {
	switchLocale: PropTypes.func,
	currentLocale: PropTypes.string
};

export default App;
