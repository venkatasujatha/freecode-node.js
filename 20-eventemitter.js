const EventEmittier = require('events');
//creating an instance to customEmitter
const customEmitter = new EventEmittier();
//bind the event
customEmitter.on('received',()=>{
    console.log('data-received')
});   //received is an event
//fire an event
customEmitter.emit('received'); //received is an event