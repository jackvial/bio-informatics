//var patternCount = require('./patterncount.js');
var reverseComplement = require('./reversecomplement.js');

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string of DNA: ", function(answer) {
  // TODO: Log the answer in a database
  console.log("The reverse complement of the DNA string you enter is: :", reverseComplement(answer));

  rl.close();
});
