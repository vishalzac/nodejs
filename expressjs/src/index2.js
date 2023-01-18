const path = require('path');
const express = require('express');
const app = express();
const port = 8000;

//this will automatically take the view folder
app.set("view engine", "hbs")

app.get('/', (req, res) => {
    res.render("index")
})


app.get('/about', (req, res) => {
    res.send('this is working')
})

app.listen(port, () => {
    console.log('server start');
})