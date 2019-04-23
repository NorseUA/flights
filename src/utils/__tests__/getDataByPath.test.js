import getData from '../getDataByPath';

describe('Utils. getDataByPath', () => {
	const mockData = {
		challenge: 11111100011,
		'chuck.berry': 'Johnny B. Goode',
		rock: {
			and: {
				roll: true
			},
			isNotAStone: 'Geology rocks'
		}
	};

	it('should return undefined if key not exist in target object', () => {
			const value = getData(mockData, 'obolonBear');
			const anotherValue = getData(mockData, 'obolon.bear');
			const oneMoreValue = getData(mockData, 'obolon.bear.is.better.than.guinness');
			const deepValue = getData(mockData, 'rock.and.pop');

			expect(value).toBeUndefined();
			expect(anotherValue).toBeUndefined();
			expect(oneMoreValue).toBeUndefined();
			expect(deepValue).toBeUndefined();
	});

	it('should return value with simple path', () => {
		const value = getData(mockData, 'challenge');
		expect(value).toBe(11111100011);
	});

	it('should return value with path that contained dot', () => {
		const value = getData(mockData, 'chuck.berry');
		expect(value).toBe('Johnny B. Goode');
	});

	it('should return value with deep', () => {
		const value = getData(mockData, 'rock.and.roll');
		const anotherValue = getData(mockData, 'rock.isNotAStone');
		expect(value).toBe(true);
		expect(anotherValue).toBe('Geology rocks');
	});
});