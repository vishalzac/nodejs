//in event the letter os const should be in capital
const EventsEmitter = require("events")
const { EventEmitter } = require("stream")

const event = new EventEmitter();

//event.on define that what you want to give to fire
event.on("saymyname", () => {
    console.log("your name is vishal")
})
event.on("saymyname", () => {
    console.log("your name is zac")
})
event.on("saymyname", () => {
    console.log("your name is hero")
})

event.on('checkpage', (src, msg) => {
    console.log(`status code is ${src} and the page is ${msg}`)
})
event.on('click', () => {
    console.log('now you clcik')
})


//event.emit fire the given event
event.emit("saymyname")
event.emit("checkpage", 200, "ok")
event.emit("click")
