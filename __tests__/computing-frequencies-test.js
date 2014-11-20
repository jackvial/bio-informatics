jest
  .dontMock('./../frequency_array/computing-frequencies.js')
  .dontMock('./../frequency_array/pattern-to-number.js')
  .dontMock('./../frequency_array/symbol-to-number.js');

describe('Compute a frequency array of every k-mer in text', function () {


    var computingFrequencies = require('./../frequency_array/computing-frequencies.js');
    var patternToNumber = require('./../frequency_array/pattern-to-number.js');
    var symbolToNumber = require('./../frequency_array/symbol-to-number.js');
	
	it('should be defined', function(){
		
		expect(computingFrequencies).toBeDefined();
	});

	
	it('should return a frequency array for a small dataset', function(){
		
            var sampleText = 'ACGCGGCTCTGAAA';
            var kmer = 2;
            var sampleResult = '2 1 0 0 0 0 2 2 1 2 1 0 0 1 1 0';
                                                
            //console.log('computingFrequecies=', computingFrequencies(sampleText, kmer));
            expect(computingFrequencies(sampleText, kmer).join(' ')).toBe(sampleResult);
	});

});
