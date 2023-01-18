const fs = require("fs");

let a = "this is s hero word"
// const writedata = fs.writeFileSync('mytext.txt', 'this is my text');
const writedata1 = fs.appendFileSync('mytext.txt', a);
console.log(writedata1)

const readadata = fs.readFileSync('mytext.txt', 'utf-8');
console.log(readadata); 
