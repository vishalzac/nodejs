const express = require("express");
const app = express();

// get request
app.get("/", (req, res) => {
    res.send('this is my new page and welcome')
});
app.get("/about", (req, res) => {
    res.send('this is about page ')
});


//listen
app.listen(8000, () => {
    console.log("listening to port 8000");
});