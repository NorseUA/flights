import { dataTypes } from '../configs';

const getStatuses = (dataType) => ({
	CK: {
		label: 'checkIn'
	},
	DL: {
		label: 'delayed',
		timeKey: (dataType === dataTypes.ARRIVAL) ? 'timeLandCalc' : 'timeDepExpectCalc'
	},
	DP: {
		label: 'departed',
		timeKey: 'timeTakeofFact'
	},
	FR: {
		label: 'inFlight'
	},
	LN: {
		label: 'landed',
		timeKey: 'timeLandFact'
	},
	ON: {
		label: 'onTime'
	},
	BD: {
		label: 'boarding'
	},
	CC: {
		label: 'checkInClosed'
	},
	GC: {
		label: 'gateClosed'
	},
	CX: {
		label: 'cancelled'
	}
});

export default getStatuses;
