// const fs = require('fs');

// const read = fs.readFile('note.txt', 'utf-8', (err, data) => {
//     console.log(data)
// })

// console.log("this is zac")

const fs = require('fs');

const a = fs.appendFile('t.text', ' a lot of thing', (err, data) => {
    console.log(data);
})
const b = fs.readFile('t.text', 'utf-8', (err, data) => {
    console.log(data)
}) 