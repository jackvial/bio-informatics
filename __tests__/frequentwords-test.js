jest.dontMock('./../frequentwords.js');

describe('frequentWords', function () {

	var frequentWords = require('./../frequentwords.js');

	it('should be defined', function () {
		
		expect(frequentWords).toBeDefined();
	});

	it('shoud return an array', function(){

		var text = 'ATAGCTGATAATAGCTATATATTTGTATA';

		expect(frequentWords(text, 3)).toEqual([]);
	});

});