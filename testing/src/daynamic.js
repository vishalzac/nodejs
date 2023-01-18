const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const hbs = require('hbs');

const pathlocation = path.join(__dirname, '../template');
console.log(pathlocation)

app.use(express.static(pathlocation))

app.set('view engine', 'hbs')
app.set('views', pathlocation)


//for partiarial
const patiarlocation = path.join(__dirname, '../public/css')
// app.use(express.static(patiarlocation))
// console.log(patiarlocation)
hbs.registerPartials(patiarlocation)

app.get('/', (req, res) => {
    res.render('index', { name: 'vishal' })
});
app.get('/about', (req, res) => {
    res.render('about')
});
app.get('*', (req, res) => {
    res.render('error', {
        error: '404 page not found'
    })
})


app.listen(port, () => {
    console.log('server started')
})