import { dataTypes, defaultLocale } from '../../configs';

const tableColumnsConfig = (locale, dataType = dataTypes.ARRIVAL) => [
	{
		label: 'terminal',
		dataKey: 'term'
	},
	{
		label: 'time',
		dataKey: '____'
	},
	{
		label: 'destination',
		dataKey: `${dataType === dataTypes.ARRIVAL ? 'airportFromID' : 'airportToID'}.city${(locale !== defaultLocale) ? `_${locale}` : '' }`
	},
	{
		label: 'status',
		dataKey: 'status'
	},
	{
		label: 'airline',
		dataKey: `airline.${(locale !== defaultLocale) ? locale : 'ua'}.name`,
		deep: true
	},
	{
		label: 'flight',
		dataKey: 'carrierID.IATA',
		additional: 'fltNo'
	}
];

export default tableColumnsConfig;
