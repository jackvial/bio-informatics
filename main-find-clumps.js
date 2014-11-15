var findClumps = require('./find-clumps.js');

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' genome.txt k-mer rangeL timesT');
  process.exit(1);
}

// Read the file and print its contents.
var fs = require('fs'), genome = process.argv[2], k = process.argv[3], l = process.argv[4],
t = process.argv[5];

fs.readFile(genome, 'utf8', function(err, fileData) {
  if (err) throw err;

  //console.log('k: %d l: %d t: %d', k, l, t);
  var clumps = findClumps(fileData, k, l, t);
  console.log(clumps);

/*
  fs.writeFile('clumps.txt', clumps.toString(), function (err) {
    if (err) throw err;
    console.log('Clumps saved to clumps.txt!');
  });
 */
});
