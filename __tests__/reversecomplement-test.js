jest.dontMock('./../reversecomplement.js');

describe('reversecomplement', function () {

	var reverseComplement = require('./../reversecomplement.js');

	it('should be defined', function () {

		expect(reverseComplement).toBeDefined();
	});

	it('should return the reverse complement of a given string of DNA', function(){

		var pattern = 'AAAACCCGGT';
		var rComplement = 'ACCGGGTTTT';

		expect(reverseComplement(pattern)).toBe(rComplement);
	});
});
