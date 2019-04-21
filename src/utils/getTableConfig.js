import { dataTypes, defaultLocale } from '../configs';

export const tableColumnNames = {
	TERMINAL: 'terminal',
	TIME: 'time',
	DESTINATION: 'destination',
	STATUS: 'status',
	AIRLINE: 'airline',
	FLIGHT: 'flight',

};

const getTableColumnsConfig = (locale, dataType = dataTypes.ARRIVAL) => [
	{
		label: tableColumnNames.TERMINAL,
		dataKey: 'term'
	},
	{
		label: tableColumnNames.TIME,
		dataKey: `time${dataType === dataTypes.ARRIVAL ? 'Arr' : 'Dep'}Shedule`
	},
	{
		label: tableColumnNames.DESTINATION,
		dataKey: `${dataType === dataTypes.ARRIVAL ? 'airportFromID' : 'airportToID'}.city${(locale !== defaultLocale) ? `_${locale}` : ''}`
	},
	{
		label: tableColumnNames.STATUS,
		dataKey: 'status'
	},
	{
		label: tableColumnNames.AIRLINE,
		dataKey: `airline.${(locale !== defaultLocale) ? locale : 'ua'}.name`,
		deep: true
	},
	{
		label: tableColumnNames.FLIGHT,
		dataKey: 'carrierID.IATA',
		additional: 'fltNo'
	}
];

export default getTableColumnsConfig;
