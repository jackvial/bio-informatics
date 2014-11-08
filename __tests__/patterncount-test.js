jest.dontMock('./../patterncount.js');

describe('patterncount', function () {

	var patternCount = require('./../patterncount.js');

	it('should be defined', function () {

		expect(patternCount).toBeDefined();
	});

	it('should count the occurrences of a string pattern in a text', function(){

		var text = 'ATAGCTGATAATAGCTATATATTTGTATA';
		var pattern = 'ATA';

		expect(patternCount(text, pattern)).toEqual(6);
	});
});