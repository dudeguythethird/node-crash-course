//Run files with 'node FILENAME' in the command line, if you are in the files directory.

const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));

//Init event
myEmitter.emit('event');