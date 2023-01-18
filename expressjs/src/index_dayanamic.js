const path = require('path');
const express = require('express');
const app = express();
const port = 8000;

const path_file = (path.join(__dirname, '../views'))

//by default it will look inside the src volder
app.set("view engine", "hbs")

//now i can change the directory
app.set("views", path_file);

app.get('/', (req, res) => {
    res.render("index")
})
app.get('/about', (req, res) => {
    res.render("about")
})


app.get('/about', (req, res) => {
    res.send('this is working')
})

app.listen(port, () => {
    console.log('server start');
})