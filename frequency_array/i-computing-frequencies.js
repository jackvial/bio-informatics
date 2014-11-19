// Interface for computing frequencies

var computingFrequencies = require('./computing-frequencies.js');


var text = process.argv[2], k = process.argv[3];

console.log(computingFrequencies(text, k));
