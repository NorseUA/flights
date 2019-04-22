import * as mockFlightsData from './__mocks__/flightsRawData';
import formatFlightsData, { groupDataByDate } from '../formatFlightsData';
import { dataTypes } from '../../configs';

describe('Utils. formatFlightsData', () => {
	it('should group flights data by date', () => {
		const groupedData = groupDataByDate(mockFlightsData[dataTypes.ARRIVAL]);
		expect(Object.keys(groupedData)).toHaveLength(3);

		const formattedDate = '16-04-2019';
		expect(groupedData).toHaveProperty(formattedDate);
		expect(Object.keys(groupedData[formattedDate])).toHaveLength(3);
	});

	it('should format flights data', () => {
		const formattedData = formatFlightsData(mockFlightsData);

		expect(Object.keys(formattedData)).toHaveLength(2);
		expect(formattedData).toHaveProperty(dataTypes.ARRIVAL);
		expect(formattedData).toHaveProperty(dataTypes.DEPARTURE);
	});
});