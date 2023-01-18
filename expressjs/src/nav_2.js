const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to home page')
})
app.get('/about', (req, res) => {
    res.send('welcome to about page')
})
app.get('/contact', (req, res) => {
    res.send('welcome to  contact page')
})
app.get('/temp', (req, res) => {
    res.status(200).send('welcome to temp page')
})


app.listen(3000, () => {
    console.log('listening to port 3000')
})