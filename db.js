'use strict'
const mongoose = require('mongoose')

let dbname = 'xxx'
mongoose.connect(`mongodb://127.0.0.1:27017/${dbname}`)
let db = mongoose.connection

db.once('open', function () {
    console.log("connect db successfully!");
});

db.on('error', function (err) {
    console.log("connect db fail, err: " + err);
});

process.on('SIGINT', function() {
    console.log('db is closing....');
    db.close(true, function(err) {
        console.log('db closed!');
        process.exit(err ? 1 : 0);
    });
});


module.exports = mongoose