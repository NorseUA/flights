import { dataTypes } from '../configs';

export const groupDataByDate = (data) => data
	.reduce((acc, item) => {
		const date = (item.actual || '').split('T')[0];
		const formattedDate = date.split('-').reverse().join('-');

		acc[formattedDate] ? acc[formattedDate].push(item) : acc[formattedDate] = [item];

		return acc;
	}, {});


const formatFlightsData = (flightsData) => Object
	.values(dataTypes)
	.reduce((acc, type) => {
		const data = flightsData[type] || [];

		acc[type] = groupDataByDate(data);

		return acc;
	}, {});

export default formatFlightsData;
