const EventEmittier = require('events');
//creating an instance to customEmitter
const customEmitter = new EventEmittier();
//customEmitter.emit('received');  //we won't get output because it is mentioned above the on method
//bind the event
customEmitter.on('received',()=>{
    console.log('data-received')
});   //received is an event name

//we can add multiple events to the one emit with the same event name

customEmitter.on('received',()=>{
console.log('some other logic here')
})

//we can add parameters to callback function
customEmitter.on('received',(name,id)=>{
    console.log(`data received with user ${name} and id ${id}`)
})

//fire an event
customEmitter.emit('received','sujatha',34); //received is an event