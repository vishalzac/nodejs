const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    const read = fs.readFileSync(`${__dirname}/info.json`, 'utf-8')
    const trans = JSON.parse(read)
    console.log(trans)

    // const data = fs.readFileSync(`${__dirname}/info.json`, "utf-8");
    // const objdata = JSON.parse(data)

    if (req.url == '/') {
        res.end("<h1>home page</h1>")
    }
    else if (req.url == '/about') {
        res.end("<h1>about page</h1>")
    }
    // else if (req.url == '/api') {
    //     res.end(objdata[4].title);
    // }
    else if (req.url == '/api') {
        res.end(trans[0].title)
    }
    else {
        res.writeHead(404)
        res.end("<h1>404: page not found</h1> ")
    }

})

server.listen(8000, '127.0.0.1', () => {
    console.log('server started')
})