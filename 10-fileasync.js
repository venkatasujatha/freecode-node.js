const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf8',function(err,result) {
    if(err) 
    {
        console.log(err);
        return
}
console.log(result);
const first = result;
readFile('./content/second.txt','utf8',function(err,result) {
    if(err) 
    {
        console.log(err);
        return;
    }
    console.log(result);
    const second = result;
    writeFile('./content/read-async.txt',`Here is result:${first},${second}`,(err,result) => {
        if(err) 
        {
            console.log(err);
            return;
        }
        console.log(result);
    });
})
}
)