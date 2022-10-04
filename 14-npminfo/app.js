const con = require('lodash');
const items = [1,[2,[3,[4]]]];
const result = con.flatDeep(items);
console.log(result);