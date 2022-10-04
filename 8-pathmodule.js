const path = require('path');
//path.sep
console.log(path.sep);
//path.join

const filepath = path.join('/content','subfolder','test.txt');
console.log(filepath);

//basename

const bs =path.basename(filepath);
console.log(bs);

//path.resolve
const res = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(res);