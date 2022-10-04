const {readFile,writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start =async ()=>{
    try{
        const first = await readFilePromise('./content/first.txt','utf8');
    const second = await readFilePromise('./content/second.txt','utf8');
    await writeFilePromise('./content/subfolder/result-mind.txt',`result is:${first} ${second}`);
    console.log(first,second);
    }
    catch(err)
    {
        console.error(err)
    }
    
}
start();