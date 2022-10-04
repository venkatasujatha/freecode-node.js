const os = require('os');
//info about current user
const user =os.userInfo();
console.log(user);

//all methods in os module
const constOs = {
    
    type:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()}

    console.log(constOs);