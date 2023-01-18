const path = require('path');
const express = require('express');
const app = express();
const port = 8000;
const hbs = require('hbs');

const path_file = (path.join(__dirname, '../views'));
const partialpath = (path.join(__dirname, '../views/partial'));


app.set("view engine", "hbs")
app.set("views", path_file);
hbs.registerPartials(partialpath)

app.get('/', (req, res) => {
    res.render("index")
})
app.get('/about', (req, res) => {
    res.render("about")
})
// * for error handling
app.get('*', (req, res) => {
    res.render("error", {
        errorcomment: 'page couldnt be found'
    });
});




app.listen(port, () => {
    console.log('server start');
})