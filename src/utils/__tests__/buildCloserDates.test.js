import formatCloserDates, { buildCloserDates } from '../buildCloserDates';
import { formatDate } from '../dateFormatters';

describe('Utils. buildCloserDates', () => {
	it('should build closer dates depends on today date', () => {
		const mockToday = {
			date: formatDate(new Date()),
			label: 'today'

		};

		const closerDates = buildCloserDates();
		expect(closerDates).toHaveLength(3);
		expect(closerDates[1]).toEqual(mockToday);
	});

	it('should translate labels', () => {
		const messages = {
			'closerDays.yesterday': 'Вчора',
			'closerDays.today': 'Сьогоднi',
			'closerDays.tomorrow': 'Завтра',
		};
		const closerDates = formatCloserDates(messages);

		expect(closerDates).toHaveLength(3);
		expect(closerDates[0].label).toEqual('Вчора');
		expect(closerDates[1].label).toEqual('Сьогоднi');
	});
});
