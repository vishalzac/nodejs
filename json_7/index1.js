const fs = require('fs');
const a = {
    name: "zac",
    class: 10,
    hobby: "basketball"
}
const b = JSON.stringify(a);
console.log(b)

// const send = fs.writeFile('j.json', b, (err, data) => {
//     console.log(data);
// })

const reda = fs.readFile('j.json', 'utf-8', (err, data) => {
    console.log(data)
    const b = JSON.parse(data);
    console.log(b)
})
