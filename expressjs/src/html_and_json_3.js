const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to home page')
})
app.get('/about', (req, res) => {
    //for writing more line of code
    res.write('<h1>this heading</h1>')
    res.write('welcome to about page')
    res.send();
})
app.get('/contact', (req, res) => {
    res.send('welcome to  contact page')
})
app.get('/temp', (req, res) => {
    //express automatically convert it into json 
    res.send([{
        a: 1,
        name: "zav"
    },
    {
        a: 1,
        name: "zav"
    }
        ,
    {
        a: 1,
        name: "zav"
    }])

})


app.listen(3000, () => {
    console.log('listening to port 3000')
})