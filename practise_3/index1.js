const fs = require("fs");

//make folder 
// fs.mkdirSync('index2')

// fs.writeFileSync("indes2.txt", "hi")
//to not override
fs.appendFileSync("indes2.txt", "Its me vishal singh")

// const a = fs.readFileSync("indes2.txt")
// console.log(a)
// const b = a.toString();
// console.log(b)

//or direct way
const a = fs.readFileSync("new1index.txt", "utf-8")
console.log(a)

//rename
// fs.renameSync("new1index.txt", "new2index.txt")

//delete file
// fs.unlinkSync('new2index.txt')

//delete folder
fs.rmdirSync('index2')


