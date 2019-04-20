import { dataTypes } from '../configs';

const formatData = (data) => data
	.reduce((acc, item) => {
		const date = (item.actual || '').split('T')[0];
		const formattedDate = date.split('-').reverse().join('-');

		if (Object.keys(acc).length < 3) {
			acc[formattedDate] ? acc[formattedDate].push(item) : acc[formattedDate] = [item];
		}

		return acc;
	}, {});


const formatFlightsData = (flightsData) => Object
	.values(dataTypes)
	.reduce((acc, type) => {
		const data = flightsData[type] || [];

		acc[type] = formatData(data);

		return acc;
	}, {});

export default formatFlightsData;
