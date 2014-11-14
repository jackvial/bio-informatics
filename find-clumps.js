// Clump Finding Problem
// Find all k-mers that occure at least t time within range
// l of Genome

// Input:
// Genome, k (pattern of length k), l (range within Genome), i
// t (The number of times a k-mer must occure within range t to form a clump)

var patternCount = require('./patterncount.js');

function findClumps(genome, k, l, t){
	var clumps = [];
	var maxCount = t;
	var currentCount = 0;

	//console.log('pattern count=', patternCount(genome, 'GA'));

	for(var i = 0; i < genome.length - k; i++){

		var pattern = genome.substr(i, k);

		// How many times does the current pattern(i, k) appear in the text
		// count[pattern] = patternCount(text, pattern);
		currentCount = patternCount(genome, pattern);

		// Only start pushing items once the current count is greater than t
		if(currentCount >= maxCount){
			maxCount = currentCount;
			clumps[pattern] = currentCount;
		}
		//console.log(maxCount);		
	}
	

	return clumps;
}

module.exports = findClumps;
