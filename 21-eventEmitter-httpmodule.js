const http = require('http');

const server = http.createServer();
server.on('response',(req, res) => {
    console.log("welcome")

})
server.emit('response')
server.listen(4000,() => {
    console.log("listening on port : 4000")
})