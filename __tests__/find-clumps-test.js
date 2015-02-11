jest.dontMock('./../find-clumps.js')
    .dontMock('./../frequency_array/computing-frequencies.js')
    .dontMock('./../frequency_array/number-to-pattern.js')
    .dontMock('./../frequency_array/symbol-to-number.js')
    .dontMock('./../frequency_array/pattern-to-number.js')
    .dontMock('./../frequency_array/number-to-symbol.js');

describe('findClumps', function () {

	var findClumps = require('./../find-clumps.js');
    var computingFrequecies = require('./../frequency_array/computing-frequencies.js');

	it('ifindClumps should be defined', function () {
		expect(findClumps).toBeDefined();
	});

	it('comoutingFrequcies should be defined', function () {
		expect(computingFrequecies).toBeDefined();
	});

	it('should return all strings that meet the clump conditions', function(){

		// Input
		var genome = 'CGGACTCGACAGATGTGAAGAACGACAATGTGAAGACTCGACACGACAGAGTGAAGAGAAGAGGAAACATTGTAA';
		var k = 5; // Length of the pattern to find (k-mer)
		var l = 50; // Upper bound of the range to find k t times
		var t = 4; // Number of times k must appear within the range l to form a clump 

		// Output
		var clumps = {'CGACA': 4,'GAAGA': 4};

		expect(findClumps(genome, k, l, t)).toEqual(clumps);
	});
});