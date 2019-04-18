import axios from 'axios';
import { apiURL } from '../configs';

const instance = axios.create({
	baseURL: apiURL,
	timeout: 5000
});

const callApi = ({ method = 'get', endpoint, requestData, options = {} }) => {
	const dataKey = method === 'get' ? 'params' : 'data';
	return instance({
		method,
		url: endpoint,
		...{ [dataKey]: requestData },
		...options
	})
		.then(({ data }) => data)
		.catch(err => console.error(err))
};

export default callApi;
