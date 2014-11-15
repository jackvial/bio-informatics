jest.dontMock('./../frequency_array/symbol-to-number.js');

describe('Covert a symbol to a number', function () {


  var symbolToNumber = require('./../frequency_array/symbol-to-number.js');
	
	it('should be defined', function(){
		
		expect(symbolToNumber).toBeDefined();
	});

	it('should return undefined', function(){
		
		expect(symbolToNumber('H')).not.toBeDefined();
	});
	
	it('should return a number between 0 and 3', function(){
		
		expect(symbolToNumber('A')).toBe(0);
		expect(symbolToNumber('C')).toBe(1);
		expect(symbolToNumber('G')).toBe(2);
		expect(symbolToNumber('T')).toBe(3);
	});
});
