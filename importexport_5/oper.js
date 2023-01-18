const add = (num, val) => {
    return num + val;
};
const sub = (num, val) => {
    return num - val;
};
const mul = (num, val) => {
    return num * val;
};

let v = "zac is awsm"


//module.exports = add;  //in case have to export single functionality
// module.exports.add = add;
// module.exports.sub = sub;

//or in one lone multiple functionality
module.exports = { add, sub, mul, v };