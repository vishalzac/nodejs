//1)make the server from global http
const http = require("http");

//2) now craete your server by the hepl of http
// req = url
// res = our site
const server = http.createServer((req, res) => {
    res.end('hello there it is me zac ');
});


//3) now listen to the server
// give port no 8000 or 3000
// give ip address
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the server")
})