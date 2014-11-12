//var patternCount = require('./patterncount.js');
var reverseComplement = require('./reversecomplement.js');

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

// Read the file and print its contents.
var fs = require('fs'), filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;

  fs.writeFile('r-comp.txt', reverseComplement(data), function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
 
});
