const {writeFileSync} = require('fs')
for(let i=0;i<10000;i++) {
    console.log('./content/subfolder/bigfile.txt',`hello world ${i}\n`,{flag :'a'})

}