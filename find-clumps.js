// Clump Finding Problem
// Find all k-mers that occure at least t time within range
// l of Genome

// Input:
// Genome, k (pattern of length k), l (range within Genome), i
// t (The number of times a k-mer must occure within range t to form a clump)
var computingFrequecies = require('./frequency_array/computing-frequencies.js');
var patternToNumber = require('./frequency_array/pattern-to-number.js');
var numberToPattern = require('./frequency_array/number-to-pattern.js');

function findClumps(genome, k, l, t){
    var frequentPatterns = [];
    var frequencyArray = [];
    var clump = [];
    var text, firstPattern, j, lastPattern, pattern;

    
    // Initialize clump array to zero
	for(var i = 0; i < Math.pow(4, k) -1; i++){
        clump[i] = 0; 
	}
    
    // Start checking the first section
    text = genome.substr(0, l);	
    frequencyArray = computingFrequecies(text, k);
    //console.log('frequencyArray=',frequencyArray);

    // Check if the number of kmers in the current section is greater than or equal to 't'
	for(var i = 0; i < Math.pow(4, k) -1; i++){
        if(frequencyArray[i] >= t){
            clump[i] = 1; 
        }
	}
    
     // Move to the next section
    for(var i = 1; i < genome.length - l; i++){
        
        firstPattern = genome.substr(i - 1, k);
        j = patternToNumber(firstPattern);
        // Decremenet the number at i
        frequencyArray[i] -= 1;

        lastPattern = genome.substr(i + l - k, k);
        j = patternToNumber(firstPattern);
        // Incremenet the number at i
        frequencyArray[i] += 1;

        if(frequencyArray[j] >= t){
            clump[j] = 1; 
        }
    }

	for(var i = 0; i < Math.pow(4, k) -1; i++){
        if(clump[i] === 1){
            pattern = numberToPattern(i, k);
            console.log('pattern=', pattern);
            frequentPatterns.push(pattern);
        }
    }
    
    console.log(frequentPatterns);
	return frequentPatterns;
}

module.exports = findClumps;
