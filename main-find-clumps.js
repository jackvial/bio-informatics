var findClumps = require('./find-clumps.js');


var genome = 'CGGACTCGACAGATGTGAAGAACGACAATGTGAAGACTCGACACGACAGAGTGAAGAGAAGAGGAAACATTGTAA';
var k = 5; // Length of the pattern to find (k-mer)
var l = 50; // Upper bound of the range to find k t times
var t = 4; // Number of times k must appear within the range l to form a clump 

console.log(findClumps(genome, k, l, t));
