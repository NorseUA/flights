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
		.then(({ data }) => {
			if (data && data.error && data.error.code >= 400) {
				return Promise.reject(data.error);
			}

			return (data && data.body);
		})
};

export default callApi;
