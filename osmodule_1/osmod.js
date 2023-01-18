//os is module we inherit
const os = require('os')

//system bit (64 or 32)
console.log(os.arch());

console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.type())

//computer memory(RAM)
const memeorycheck = os.freemem();
console.log(memeorycheck); //bytes
console.log(`${memeorycheck / 1024 / 1024 / 1024}`)

const totalmemeorycheck = os.totalmem();
console.log(`${totalmemeorycheck / 1024 / 1024 / 1024}`)
