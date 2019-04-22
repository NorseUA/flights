export const terminals = {
	INTERNATIONAL: 'a',
	BUSINESS: 'b',
	DOMESTIC: 'd'
};

const terminalColors = {
	[terminals.INTERNATIONAL]: 'lightGreen',
	[terminals.BUSINESS]: 'red',
	[terminals.DOMESTIC]: 'lightBlue',
};

const getTerminalColor = (terminal = '') => terminalColors[terminal.toLowerCase()] || terminalColors[terminals.INTERNATIONAL];

export default getTerminalColor;
