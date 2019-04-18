import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import styles from './HeaderStyles';

const Header = (props) => (
	<AppBar position="static" color="primary" classes={{ root: props.classes.root }}>
		<Toolbar>
			<Typography variant="h5" color="inherit" className={props.classes.grow}>
				{props.logo || props.title}
			</Typography>
			{props.children}
		</Toolbar>
	</AppBar>
);

Header.propTypes = {
	title: PropTypes.string,
	classes: PropTypes.object,
	logo: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	])
};

export default withStyles(styles)(Header);