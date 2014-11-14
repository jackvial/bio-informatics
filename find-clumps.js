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
	var range = l;

	//console.log('pattern count=', patternCount(genome, 'GA'));

	for(var i = 0; i < genome.length - range; i++){

		var subGenome = genome.substr(i, range);
		//console.log('subGenome at i =',i,subGenome);

		for(var j = i; j < subGenome.length - k; j++){

			var pattern = subGenome.substr(j, k);
			console.log(pattern);

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
	}
	

	return clumps;
}

module.exports = findClumps;
