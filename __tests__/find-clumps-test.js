jest.dontMock('./../find-clumps.js')
 .dontMock('./../patterncount.js');

describe('findClumps', function () {

	var findClumps = require('./../find-clumps.js');
	var patternCount = require('./../patterncount.js');

	it('should be defined', function () {

		expect(findClumps).toBeDefined();
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
