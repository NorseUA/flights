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

const SearchBox = props => {
	const inputRef = React.createRef();

	const handleSearch = () => {
		const query = inputRef.current.value || '';
		props.handleSearch(query);
	};

	return (
		<div className={props.classes.boxWrapper}>
			<div className={props.classes.inputWrapper}>
				<input
					ref={inputRef}
					type="text"
					placeholder={(props.intl.messages['searchBox.placeholder'])}
				/>
				<img src={searchIcon} alt=""/>
			</div>
			<Button onClick={handleSearch} className={props.classes.button} color="primary" variant="contained">
				<FormattedMessage id="searchBox.button" />
			</Button>
		</div>
	);
};

SearchBox.propTypes = {
	intl: PropTypes.object,
	handleSearch: PropTypes.func
};

export default injectIntl(withStyles(styles)(SearchBox));