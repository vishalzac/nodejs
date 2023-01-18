const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const pathlocation = path.join(__dirname, '../public/web');

app.use(express.static(pathlocation))


// app.get('/', (req, res) => {
//     res.render('index')
// })
// app.get('/about', (req, res) => {
//     res.render('about')
// })

app.listen(port, () => {
    console.log('server started')
})