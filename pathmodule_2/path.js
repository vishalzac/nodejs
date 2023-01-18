//path define the overview projec/
const path = require('path')

console.log(path.dirname('C:/Users/vishal singh/nodejs_tutorial/pathmodule/path.js'));
console.log(path.extname('C:/Users/vishal singh/nodejs_tutorial/pathmodule/path.js'));
console.log(path.basename('C:/Users/vishal singh/nodejs_tutorial/pathmodule/path.js'));


//parse define everything regardong that project
console.log(path.parse('C:/Users/vishal singh/nodejs_tutorial/pathmodule/path.js'));


const a = path.parse('C:/Users/vishal singh/nodejs_tutorial/pathmodule/path.js');
console.log(a.name)

const b = path.parse('Users/vishal singh/nodejs_tutorial/osmodule_1/path.js')
console.log(b)