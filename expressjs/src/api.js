const path = require('path');
const express = require('express');
const app = express();
const port = 8000;
const hbs = require('hbs');
const { request } = require('http');

const path_file = (path.join(__dirname, '../views'));
const partialpath = (path.join(__dirname, '../views/partial'));


app.set("view engine", "hbs")
app.set("views", path_file);
hbs.registerPartials(partialpath)

app.get('/', (req, res) => {
    res.render("index")
})
app.get('/about', (req, res) => {
    request()
        .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            const realtimedata = arrData
                .map((val) => replaceval(homeFile, val))
                .join("");
            res.write(realtimedata);
        })
        .on("end", (err) => {
            if (err) return console.log("connect error", err);
        });
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