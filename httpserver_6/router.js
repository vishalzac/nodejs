const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('hello there it is me zac ');
    }
    else if (req.url == '/about') {
        res.end('about zac ');
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404: page doesn't exist</h1>")
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the server")
})