const http = require('http');
const server = http.createServer((req,res) => {
    res.write("welcome to home page");
    //console.log("hi")
    res.end();
})

server.listen(5000);