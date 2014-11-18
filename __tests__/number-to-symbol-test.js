jest.dontMock('./../frequency_array/number-to-symbol.js');

describe('Covert a number to s sumbol', function () {


  var numberToSymbol = require('./../frequency_array/number-to-symbol.js');
	
	it('should be defined', function(){
		
		expect(numberToSymbol).toBeDefined();
	});

	it('should return undefined', function(){
		
		expect(numberToSymbol(7)).not.toBeDefined();
	});
	
	it('should return a symbol(A C G or T)', function(){
		
		expect(numberToSymbol(0)).toBe('A');
		expect(numberToSymbol(1)).toBe('C');
		expect(numberToSymbol(2)).toBe('G');
		expect(numberToSymbol(3)).toBe('T');
	});
});
