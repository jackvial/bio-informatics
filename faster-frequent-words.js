// A faster frequent words algorithm
// https://stepic.org/lesson/CS-The-Frequency-Array-2994/step/6?course=Bioinformatics-Algorithms&unit=1003
var patternToNumber = require('./pattern-to-number.js');
var computingFrequencies = require('./frequency_array/computing-frequencies.js');

function fasterFrequentWords(text, k){
    var freqPatterns = [];
    var freqArray = [];
    var maxCount;

    freqArray = computingFrequencies(text, k);
    
    maxCount

    console.log('freqArray=', freqArray);
    
    return '';
}

module.exports = fasterFrequentWords;
