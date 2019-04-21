// Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Components
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, } from '@material-ui/core';
import { supportedLocales } from '../../i18n/locales';

// Styles
import styles from './LangSwitcherStyles';

class LangSwitcher extends Component {
	state = {
		showMenu: false
	};

	handleToggle = () => {
		this.setState(state => ({ showMenu: !state.showMenu }));
	};

	handleClose = event => {
		if (this.anchorEl.contains(event.target)) {
			return;
		}

		this.setState({ showMenu: false });
	};

	handleSelect = (evt) => {
		this.props.switchLocale(evt.target.dataset.lang);
		this.handleToggle();
	};

	render() {
		const { showMenu } = this.state;
		return (
			<ClickAwayListener onClickAway={this.handleClose}>
				<div>
					<Button
						buttonRef={node => {
							this.anchorEl = node;
						}}
						aria-owns={showMenu ? 'menu-list-grow' : undefined}
						aria-haspopup="true"
						color="inherit"
						onClick={this.handleToggle}
					>
						{this.props.currentLocale.toUpperCase()}
					</Button>

					<Popper open={showMenu} anchorEl={this.anchorEl} transition disablePortal>
						{({ TransitionProps }) => (
							<Grow
								{...TransitionProps}
								id="menu-list-grow"
								style={{ transformOrigin: 'center bottom' }}
							>
								<Paper classes={this.props.classes}>
									<ClickAwayListener onClickAway={this.handleClose}>
										<MenuList>
											{supportedLocales.map(({ label, value }) => (
												<MenuItem
													data-lang={value}
													key={value}
													onClick={this.handleSelect}
													classes={this.props.classes}
												>
													{label.toUpperCase()}
												</MenuItem>
											))}
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</div>
			</ClickAwayListener>
		);
	}
}

LangSwitcher.propTypes = {
	currentLocale: PropTypes.string,
	switchLocale: PropTypes.func
};

export default withStyles(styles)(LangSwitcher);
