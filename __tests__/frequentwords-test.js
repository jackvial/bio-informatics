jest.dontMock('./../frequentwords.js');

describe('frequentWords', function () {

	var frequentWords = require('./../frequentwords.js');

	it('should be defined', function () {
		
		expect(frequentWords).toBeDefined();
	});

	it('shoud return an array', function(){
		var text = 'ATAGCTGATAATAGCTATATATTTGTATA';

		expect(Array.isArray(frequentWords(text, 3))).toBe(true);
	});

	it('shoud return the most frequent words', function(){

		var genome = 'ATAGCTGATAATAGCTATATATTTGTATA';
		var mostFrequentWords = ['ATA'];

		var freqWords = frequentWords(genome, 3);
		console.log('freqwords=', freqWords);

		expect(freqWords).toEqual(mostFrequentWords);
	});

});
