// Compute the frequency of every k-mer in text of length k
var patternToNumber = require('./pattern-to-number.js');

function computingFrequencies(text, k){
    
    var frequencyArray = [], pattern = '', j;

    //console.log('cF-text length=',text.length);
    
    //console.log('cF-text=', text);
    //console.log('cF-k=', k);
   
   for(var i = 0; i < Math.pow(4, k); i++){
        frequencyArray[i] = 0;
    }
    
   for(var i = 0; i <= text.length - k; i++){
        pattern = text.substr(i, k); 
        //console.log('cF-patternToNumber=', patternToNumber(pattern));
        
        j = patternToNumber(pattern);
        //console.log('cF var j=', j);

        // If the current pattern exists increment it,
        //  if not then push it to the array and assign it a count of 1
        frequencyArray[j] = frequencyArray[j] + 1; 
    } 
    //console.log('frequencyArray=',frequencyArray);
    return frequencyArray;
}

module.exports = computingFrequencies;
