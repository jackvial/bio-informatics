//text: An RNA or DNA sequence
//k: the length of the word
var patternCount = require('./patterncount.js');

function frequentWords(text, k){

	// Somewhere to store patterns
	var freqPatterns = [];
	var count = {};
	var maxCount = 0;
	var currentCount = 0;
	
	for(var i = 0; i < text.length - k; i++){

		var pattern = text.substr(i, k);

		// How many times does the current pattern(i, k) appear in the text
		//count[pattern] = patternCount(text, pattern);
		currentCount = patternCount(text, pattern);

		if(currentCount >= maxCount){
			maxCount = currentCount;
			freqPatterns[pattern] = currentCount;
		}
		//console.log(maxCount);		
	}
	


	console.log(freqPatterns); 
	return freqPatterns;
	
}

module.exports = frequentWords;