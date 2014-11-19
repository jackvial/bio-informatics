jest
  .dontMock('./../faster-frequent-words.js')
  .dontMock('./../frequency_array/computing-frequencies.js')
  .dontMock('./../frequency_array/number-to-pattern.js')

describe('Compute the most frequent k-mer in text', function () {

    var fasterFrequentWords = require('./../faster-frequent-words.js');
    var computingFrequencies = require('./../frequency_array/computing-frequencies.js');
    var numberToPattern = require('./../frequency_array/number-to-pattern.js');
	
	it('computingFrequencies should be defined', function(){
		
		expect(computingFrequencies).toBeDefined();
	});

	it('fasterFrequentWords should be defined', function(){
		
		expect(fasterFrequentWords).toBeDefined();
	});

	it('fasterFrequentWords should return the most frequent words', function(){
	    
        var text = 'ATATATATATATATATATATATATATATATATATATACGCGCAATATATATATATAT'	
        var kmer = 3;        

		expect(fasterFrequentWords(text, kmer)).toEqual('ATA');
	});

});
