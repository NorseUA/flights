import { supportedLocales } from '../i18n/locales';

export const localeFlag = '<=locale=>';
const baseFields = [
	'fltNo',
	'carrierID.IATA',
	'airportFromID.city',
	'airportToID.city',
	`airportFromID.city_${localeFlag}`,
	`airportToID.city_${localeFlag}`,
	`airline.${localeFlag}.name`
];

export const buildFieldsForSearch = (fields) => {
	return fields.reduce((acc, item) => {
		if (item.includes(localeFlag)) {
			const localizedFields = supportedLocales
				.map(({ label }) => item.replace(localeFlag, label));
			acc.push(...localizedFields);
		} else {
			acc.push(item);
		}

		return acc;
	}, []);
};

export default buildFieldsForSearch(baseFields);
