import * as mockFlightsData from './__mocks__/flightsRawData';
import filterFlightsDataByQuery from '../filterFlightsDataByQuery';

describe('Utils. filterFlightsDataByQuery', () => {
	it('should filter data array by query', () => {
		const mockData = mockFlightsData.arrival;
		let query = '6224';
		let filtered = filterFlightsDataByQuery(mockData, query);
		expect(filtered).toHaveLength(1);
		expect(filtered[0]['fltNo']).toBe(query);

		query = 'W6';
		filtered = filterFlightsDataByQuery(mockData, query);
		expect(filtered).toHaveLength(2);
		expect(filtered[0]['carrierID.IATA']).toBe(query);

		query = 'B2839';
		filtered = filterFlightsDataByQuery(mockData, query);
		expect(filtered).toHaveLength(2);
		expect(query).toContain(filtered[0]['carrierID.IATA']);
		expect(query).toContain(filtered[0]['fltNo']);

		query = 'мотор';
		filtered = filterFlightsDataByQuery(mockData, query);
		expect(filtered).toHaveLength(2);
		expect(filtered[0].airline.ua.name).toMatch(/мотор/i);


		query = 'Mi';
		filtered = filterFlightsDataByQuery(mockData, query);
		expect(filtered).toHaveLength(4);
		expect(filtered[1]['airportFromID.city_en']).toMatch(/mi/i);
	});
});