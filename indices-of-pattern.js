// Pattern Matching Problem: Find all occurrences of a pattern in a string.
// Input: Two strings, Pattern and Genome.
// Output: All starting positions where Pattern appears as a substring of Genome.

function indicesOfPattern(pattern, genome){
	
	var startIndex = 0, patternLen = pattern.length;

	// Keepp track of each occurrence of the pattern
	var index, indices = [];

	// Keeps going as long as an instance of the pattern in found in the genome
	while((index = genome.indexOf(pattern, startIndex)) > -1){
		
		// Push the current index for the instance of pattern
		indices.push(index);

		// Move the starting point forward
		startIndex = index + 1;

	}	
	
	return indices;
}

module.exports = indicesOfPattern;
