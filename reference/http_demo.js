//Run files with 'node FILENAME' in the command line, if you are in the files directory.

const http = require('http');

// Create server object
http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
})
.listen(5000, () => console.log('Server running...'));