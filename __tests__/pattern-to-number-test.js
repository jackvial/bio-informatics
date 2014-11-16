jest.dontMock('./../frequency_array/pattern-to-number.js')
  .dontMock('./../frequency_array/symbol-to-number.js');

describe('Covert a pattern to a number', function () {


  var patternToNumber = require('./../frequency_array/pattern-to-number.js');
  var symbolToNumber = require('./../frequency_array/symbol-to-number.js');
	
	it('should be defined', function(){
		
		expect(patternToNumber).toBeDefined();
	});

	
	it('should return a number', function(){
		
                                                var samplePattern = 'AGT';
                                                var sampleResult = 11;
                                                
                                                expect(patternToNumber(samplePattern)).toBe(sampleResult);
	});
});
