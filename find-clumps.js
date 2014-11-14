// Clump Finding Problem
// Find all k-mers that occure at least t time within range
// l of Genome

// Input:
// Genome, k (pattern of length k), l (range within Genome), i
// t (The number of times a k-mer must occure within range t to form a clump)

var frequentWords = require('./frequentwords.js');

function findClumps(genome, k, l, t){
	var clumps = [];

	console.log(frequentWords(genome, k));
	console.log(genome);
	console.log(k);
	return clumps;
}

module.exports = findClumps;
