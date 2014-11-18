jest.dontMock('./../frequency_array/number-to-pattern.js')
  .dontMock('./../frequency_array/number-to-symbol.js');

describe('Convert a number to a string pattern', function () {


  var numberToPattern = require('./../frequency_array/number-to-pattern.js');
  var numberToSymbol = require('./../frequency_array/number-to-symbol.js');

	it('numberToSymbol should be defined', function(){
		
		expect(numberToSymbol).toBeDefined();
	});
	
	it('should be defined', function(){
		
		expect(numberToPattern).toBeDefined();
	});

	
	it('should return a number', function(){
		
          var resultPattern = 'AGTC';
          var index = 45;
   
          // k is the length of the original string
          var k = 4;
                                                
          expect(numberToPattern(index, k)).toBe(resultPattern);
	});
});
