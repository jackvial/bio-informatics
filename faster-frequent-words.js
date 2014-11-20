// A faster frequent words algorithm
// https://stepic.org/lesson/CS-The-Frequency-Array-2994/step/6?course=Bioinformatics-Algorithms&unit=1003
//var patternToNumber = require('./frequency_array/pattern-to-number.js');
var computingFrequencies = require('./frequency_array/computing-frequencies.js');
var numberToPattern = require('./frequency_array/number-to-pattern.js');

function fasterFrequentWords(text, k){
    var freqPatterns = [];
    var freqArray = [];
    var maxCount;
    var pattern;

    freqArray = computingFrequencies(text, k);
    
    maxCount = Math.max.apply(Math, freqArray);

    //console.log('freqArray=', freqArray);
    //console.log('maxCount=', maxCount);

    for(var i = 0; i < Math.pow(4, k); i++){
       if(freqArray[i] === maxCount){
            pattern = numberToPattern(i, k);
            console.log(pattern);   
            freqPatterns.push(pattern);
       } 

    }
    
    return freqPatterns;
}

module.exports = fasterFrequentWords;
