const {readFile, writeFile} = require('fs');
console.log("started")
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
        console.log("done with the task");
    });
})
}
)
console.log("started another task");

//file sync task
const {readFileSync, writeFileSync} = require('fs');
console.log("started")
const first =readFileSync('./content/first.txt','utf-8');
const second =readFileSync('./content/second.txt','utf-8');
console.log(first,second);
writeFileSync('./content/read-sync.txt',`here is result: ${first},${second}`,{flag:'a'});
console.log("done with this task");
console.log("started another task")