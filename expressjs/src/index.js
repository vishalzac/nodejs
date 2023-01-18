const path = require('path');
const express = require("express");
const app = express();
const port = 8000;

//get path
// console.log(path.join(__dirname, "../public"))
const staticPath = path.join(__dirname, "../public");

//middleware
app.use(express.static(staticPath));



//now the website of html gonna show not what is wriiten below

app.get("/", (req, res) => {
    res.send('this is my new page and welcome')
});
app.get("/about", (req, res) => {
    res.send('this is about pag ')
});



app.listen(port, () => {
    console.log("listening to port 8000");
});