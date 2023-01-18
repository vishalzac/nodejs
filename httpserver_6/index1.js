const http = require('http');
const { type } = require('os');

const startserver = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("<h1>this is my page hi to everyone</h1>")
    }
    else if (req.url == '/about') {
        res.end("<h1>this is about page</h1>")
    }
    else if (req.url == '/info') {
        res.end("<h1>this is info page</h1>")
    }
    else {
        res.writeHead(404, { 'content-type': 'text-html' });
        res.end("<h1>404: error</h1>")
    }

})

startserver.listen(8000, '127.0.0.1', () => {
    console.log("server start");
})