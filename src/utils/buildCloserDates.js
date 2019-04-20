import { formatDate } from './dateFormatters';

const closerDates = [
	{
		label: 'yesterday',
		add: -1
	},
	{
		label: 'today',
		add: 0
	},
	{
		label: 'tomorrow',
		add: 1
	}
];

const buildCloserDates = () => {
	const targetDate = new Date();
	const today = targetDate.getDate();

	return closerDates.map(({ label, add }) => {
		targetDate.setDate(today + add);
		const date = formatDate(targetDate);

		return ({ label, date });
	});
};

const formatCloserDates = (messages) => buildCloserDates()
	.map(date => ({
		...date,
		label: messages[`closerDays.${date.label}`],
	}));

export default formatCloserDates;
