const DATE_SEPARATOR = '-';

const formatPart = (part) => (part > 9) ? part : `0${part}`;

export const formatDate = (date = new Date()) => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const formattedDay = formatPart(day);
	const formattedMonth = formatPart(month);

	return [formattedDay, formattedMonth, year].join(DATE_SEPARATOR);
};

export const parseDate = (formattedDate) => {
	const dateParts = formattedDate.split(DATE_SEPARATOR).reverse();
	dateParts[1] = dateParts[1] - 1;
	return new Date(...dateParts);
};
