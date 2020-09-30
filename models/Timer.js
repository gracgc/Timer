const {Schema, model} = require('mongoose');

const schema = new Schema({
    minutes: Number,
    seconds: Number,
    milliseconds: Number
});

// const timer1 = new Timer({
//     minutes: 3,
//     seconds: 0,
//     milliseconds: 0
// });


module.exports = model('Timer', schema);



