// Compute the frequency of every k-mer in text of length k
var patternToNumber = require('./pattern-to-number.js');

function computingFrequencies(text, k){
    
    var frequencyArray = [], pattern = '', j;

    console.log(text.length);
   
   for(var i = 0; i <= Math.pow(4, k); i++){
        frequencyArray[i] = 0;
    }
    
   for(var i = 0; i <= text.length - k; i++){
        pattern = text.substr(i, k); 
        console.log(pattern);
        
        j = patternToNumber(pattern);
        console.log(j);

        // If the current pattern exists increment it,
        //  if not then push it to the array and assign it a count of 1
        frequencyArray[j] = frequencyArray[j] + 1; 
    } 

    return frequencyArray;
}

module.exports = computingFrequencies;
