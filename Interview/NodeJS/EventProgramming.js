
// Import the 'events' module
const events = require('events');

// Instantiate an EventEmitter object
const eventEmitter = new events.EventEmitter();

// Handler associated with the event
const connectHandler = function connected() {
    console.log('Connection established.');

    // Trigger the corresponding event
    eventEmitter.emit('data_received');
}

// Binds the event with handler
eventEmitter.on('connection', connectHandler);

// Binds the data received
eventEmitter.on(
    'data_received', function () {
        console.log('Data Transfer Successful.');
    });

// Trigger the connection event
eventEmitter.emit('connection');

console.log("Finish");