//fs = file system
//to work with fs we have to write this same as express(installation)
const fs = require("fs");

//for creating  anew file by just code
fs.writeFileSync("vishal.txt", "to")
// write new word without overiding 
fs.appendFileSync("vishal.txt", "you")


//read file but it will show buffer data or number data
let a = fs.readFileSync("vishal.txt")
console.log(a)
//to read the data
let b = a.toString();
console.log(b);

let an = fs.readFileSync("readwrite.txt", "utf-8")
console.log(an)
fs.renameSync("vishal.txt", "readwrite.txt")