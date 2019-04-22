import * as mockStatusesConfigs from './__mocks__/statuses';
import getStatuses from '../getStatuses';
import { dataTypes } from '../../configs';

describe('Utils. getStatuses', () => {
	it('should build statuses config for arrival tab', () => {
		const config = getStatuses(dataTypes.ARRIVAL);

		expect(config).toEqual(mockStatusesConfigs[dataTypes.ARRIVAL]);
	});

	it('should build statuses config for departure tab', () => {
		const config = getStatuses(dataTypes.DEPARTURE);

		expect(config).toEqual(mockStatusesConfigs[dataTypes.DEPARTURE]);
	});
});
