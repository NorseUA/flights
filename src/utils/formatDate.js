const formatDate = (date = new Date()) => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const formattedMonth = (month > 9) ? month : `0${month}`;
	const day = date.getDate();

	return `${day}-${formattedMonth}-${year}`;
};

export default formatDate;
