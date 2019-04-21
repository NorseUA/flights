import fieldsForSearch from './buildFieldsForSearch';
import getData from './getDataByPath';

const filterFlightsDataByQuery = (data, query) => data
	.filter(flight => fieldsForSearch
		.some(path => {
			const value = getData(flight, path);
			return value && (query.includes(value) || RegExp(query, 'i').test(value));
		}));

export default filterFlightsDataByQuery;
