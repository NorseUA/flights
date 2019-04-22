import { formatDate, formatDatePart, parseDate } from '../dateFormatters';

describe('Utils. dateFormatters', () => {
	it('should format date part', () => {
			expect(formatDatePart(3)).toBe('03');
			expect(formatDatePart(9)).toBe('09');
			expect(formatDatePart(10)).toBe('10');
			expect(formatDatePart(25)).toBe('25');
	});

	it('should format date object to dd-mm-yyyy', () => {
		 const date = new Date(2019, 11, 1);
		 const formatted = formatDate(date);
		 expect(formatted).toBe('01-12-2019');
	});

	it('should parse formatted date to date object', () => {
		const formatted = '01-12-2019';
		const parsed = parseDate(formatted);
		expect(parsed instanceof Date).toBeTruthy();
		expect(parsed.getDate()).toBe(1);
		expect(parsed.getMonth()).toBe(11);
	});
});
