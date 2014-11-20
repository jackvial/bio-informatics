jest
  .dontMock('./../faster-frequent-words.js')
  .dontMock('./../frequency_array/computing-frequencies.js')
  .dontMock('./../frequency_array/number-to-pattern.js')
  .dontMock('./../frequency_array/symbol-to-number.js')
  .dontMock('./../frequency_array/pattern-to-number.js')
  .dontMock('./../frequency_array/number-to-symbol.js');

describe('Compute the most frequent k-mer in text', function () {

    var fasterFrequentWords = require('./../faster-frequent-words.js');
    var computingFrequencies = require('./../frequency_array/computing-frequencies.js');
    var numberToPattern = require('./../frequency_array/number-to-pattern.js');
    var symbolToNumber = require('./../frequency_array/symbol-to-number.js');
    var patternToNumber = require('./../frequency_array/pattern-to-number.js');
    var numberToSymbol = require('./../frequency_array/number-to-symbol.js');
	
	it('computingFrequencies should be defined', function(){
		
		expect(computingFrequencies).toBeDefined();
	});

	it('fasterFrequentWords should be defined', function(){
		
		expect(fasterFrequentWords).toBeDefined();
	});

	it('fasterFrequentWords should return the most frequent words', function(){
	    
        var text = 'ACGCGGCTCTGAAAATATATATATATATATATATATATATATATATATATATAT';
        var kmer = 3;        
        var expectedResult = 'ATA TAT'

		expect(fasterFrequentWords(text, kmer).join(' ')).toEqual('ATA TAT');
	});

});
