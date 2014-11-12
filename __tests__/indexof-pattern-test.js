jest.dontMock('./../indexof-pattern.js');

describe('indexOfPattern', function () {

	var indexOfPattern = require('./../indexof-pattern.js');

	it('should be defined', function () {

		expect(indexOfPattern).toBeDefined();
	});

	it('should return the index of every occurence of a pattern in a Genome string', function(){

		var pattern = 'ATAT';
		var genome = 'GATATATGCATATACTT';

		expect(indexOfPattern(pattern, genome)).toBe([1, 3, 9]);
	});
});
