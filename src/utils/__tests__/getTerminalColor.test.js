import getTerminalColor from '../getTerminalColor';

describe('Utils. getTerminalColor', () => {
	it('should return default color for unknown terminal', () => {
		let color = getTerminalColor('Z');
		expect(color).toBe('lightGreen');

		color = getTerminalColor();
		expect(color).toBe('lightGreen');
	});

	it('should return color name for terminal', () => {
		let color = getTerminalColor('A');
		expect(color).toBe('lightGreen');

		color = getTerminalColor('B');
		expect(color).toBe('red');

		color = getTerminalColor('D');
		expect(color).toBe('lightBlue');
	});
});
