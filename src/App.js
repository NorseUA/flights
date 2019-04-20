import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Header, LangSwitcher } from './components';
import { BoardContainer } from './containers';
import theme from './uiTheme';

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
