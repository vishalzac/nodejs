//json

const fs = require("fs")
const biodata = {
    name: "vishal",
    age: 20,
    channel: "no chnnel",

}
console.log(biodata.channel)

////converting data into json format
// const jsondata = JSON.stringify(biodata);
// console.log(jsondata)


////from json to object
// const objdata = JSON.parse(jsondata);
// console.log(objdata)


const jsonData = JSON.stringify(biodata);
////creating a new file and sending this data to that file
// fs.writeFile('json1.json', jsonData, (err) => {
//     console.log("done");
// })

fs.readFile("json1.json", "utf-8", (err, data) => {
    console.log(data)
    const convert = JSON.parse(data);
    console.log(convert)

})

