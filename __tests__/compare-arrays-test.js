describe('Compare two arrays', function () {

	
	function funcClumps(){
		var arrClumps = ['CGACA','GAAGA'];
		return arrClumps;
	} 
	
	it('should pass for two arrays that are the same', function(){

		var clumps1 = ['CGACA','GAAGA'];
		var clumps2 = ['CGACA','GAAGA'];

		expect(funcClumps()).toEqual(clumps2);
	});
});
