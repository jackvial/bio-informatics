var indicesOfPattern = require('./indices-of-pattern.js');

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

// Read the file and print its contents.
var fs = require('fs'), genome = process.argv[2], pattern = process.argv[3];

fs.readFile(genome, 'utf8', function(err, data) {
  if (err) throw err;

  var indicesData = indicesOfPattern(pattern, data).join(' ');

  fs.writeFile('indices_data.txt', indicesData, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
 
});
