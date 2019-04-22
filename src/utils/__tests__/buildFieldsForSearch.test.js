import { buildFieldsForSearch, localeFlag } from '../buildFieldsForSearch';

describe('Utils. buildFieldsForSearch', () => {
	it('should build field names with locales', () => {
		const mockFields = [
			'carrierID.IATA',
			`airportFromID.city_${localeFlag}`,
			`airline.${localeFlag}.name`
		];
		const expectedResult = [
			'carrierID.IATA',
			'airportFromID.city_ua',
			'airportFromID.city_en',
			'airline.ua.name',
			'airline.en.name'
		];

		const result = buildFieldsForSearch(mockFields);

		expect(result).toEqual(expectedResult);
	});
});