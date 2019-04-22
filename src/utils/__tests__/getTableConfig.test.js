import getTableColumnsConfig from '../getTableConfig';
import * as mockTableConfigs from './__mocks__/tableConfigs';
import { dataTypes } from '../../configs';

describe('Util. getTableConfig', () => {
	it('should build config for arrival tab and ua locale ', () => {
		const config = getTableColumnsConfig('uk', dataTypes.ARRIVAL);
		expect(config).toEqual(mockTableConfigs[`${dataTypes.ARRIVAL}_ua`]);
	});

		it('should build config for arrival tab and en locale ', () => {
		const config = getTableColumnsConfig('en', dataTypes.ARRIVAL);
		expect(config).toEqual(mockTableConfigs[`${dataTypes.ARRIVAL}_en`]);
	});

		it('should build config for departure tab and ua locale ', () => {
		const config = getTableColumnsConfig('uk', dataTypes.DEPARTURE);
		expect(config).toEqual(mockTableConfigs[`${dataTypes.DEPARTURE}_ua`]);
	});

		it('should build config for departure tab and en locale ', () => {
		const config = getTableColumnsConfig('en', dataTypes.DEPARTURE);
		expect(config).toEqual(mockTableConfigs[`${dataTypes.DEPARTURE}_en`]);
	});
});