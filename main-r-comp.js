//var patternCount = require('./patterncount.js');
var reverseComplement = require('./reversecomplement.js');

var readline = require('readline');

// Create an interface object
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get input and process it
rl.question("Enter a string of DNA: ", function(answer) {
  console.log("The reverse complement of the DNA string you enter is: :", reverseComplement(answer));
  rl.close();
});
