const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/')
    {
        res.end('welcome to home page')
    }
    if(req.url ==='/about'){
        res.end('hello world')
    }
    console.log("oops!something went wrong");
})
server.listen(4000);