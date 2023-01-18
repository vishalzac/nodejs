const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/info.json`, "utf-8");
    const objdata = JSON.parse(data)
    console.log(objdata)

    if (req.url == '/') {
        res.end('hello the re it is me zac ');
    }
    else if (req.url == '/about') {
        res.end('about zac ')
    }
    else if (req.url == '/api') {
        res.end(objdata[5].title);
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404: page doesn't exist</h1>")
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the server")
})