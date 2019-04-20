const DATE_SEPARATOR = '-';

export const formatDate = (date = new Date()) => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const formattedMonth = (month > 9) ? month : `0${month}`;
	const day = date.getDate();

	return [day, formattedMonth, year].join(DATE_SEPARATOR);
};

export const parseDate = (formattedDate) => {
	const dateParts = formattedDate.split(DATE_SEPARATOR).reverse();
	dateParts[1] = dateParts[1] - 1;
	return new Date(...dateParts);
};
