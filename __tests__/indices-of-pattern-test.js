jest.dontMock('./../indices-of-pattern.js');

describe('indicesOfPattern', function () {

	var indicesOfPattern = require('./../indices-of-pattern.js');

	it('should be defined', function () {

		expect(indicesOfPattern).toBeDefined();
	});

	it('should return the indices of every occurence of a pattern in a Genome string', function(){

		var pattern = 'ATAT';
		var genome = 'GATATATGCATATACTT';
		var indices = [1, 3, 9];

		expect(indicesOfPattern(pattern, genome)).toEqual(indices);
	});
});
