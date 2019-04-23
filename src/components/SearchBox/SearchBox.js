// Modules
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Component
import { Button } from '@material-ui/core';
import { injectIntl } from 'react-intl';

// Styles
import styles from './SearchBoxStyles';
import searchIcon from '../../icons/search-icon.svg';
import { FormattedMessage } from 'react-intl';

const SearchBox = ({ handleSearch, intl, classes }) => {
	const inputRef = React.createRef();

	const clickHandler = () => {
		const query = inputRef.current.value || '';
		handleSearch(query);
	};

	const keyDownHandler = (evt) => {
		const { keyCode, target } = evt;

		if (+keyCode === 13) {
			handleSearch(target.value);
			target.blur();
		}
	};

	return (
		<div className={classes.boxWrapper}>
			<div className={classes.inputWrapper}>
				<input
					ref={inputRef}
					type="text"
					onKeyDown={keyDownHandler}
					placeholder={(intl.messages['searchBox.placeholder'])}
				/>
				<img src={searchIcon} alt=""/>
			</div>
			<Button onClick={clickHandler} className={classes.button} color="primary" variant="contained">
				<FormattedMessage id="searchBox.button" defaultMessage="Search" />
			</Button>
		</div>
	);
};

SearchBox.propTypes = {
	intl: PropTypes.object,
	classes: PropTypes.object,
	handleSearch: PropTypes.func
};

export default injectIntl(withStyles(styles)(SearchBox));