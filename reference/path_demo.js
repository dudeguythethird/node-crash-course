//Run files with 'node FILENAME' in the command line, if you are in the files directory.

const path = require('path');

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

//Creat path object (returns an object with various data points you can access with 'path.parse(__filename).DATAPOINTKEY)
console.log(path.parse(__filename)); 

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))