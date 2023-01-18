const http = require("http");


const server = http.createServer((req, res) => {
    res.end("this is my world");
});

server.listen(3000, "127.0.0.1", () => {
    console.log("your server is start")
})