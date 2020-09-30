const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

const PORT = 5000;

let mongoConnect = 'mongodb+srv://gracgc:4713944vk@cluster0.i9puo.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "'GET, POST, PUT, DELETE, PATCH'");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/timer', require('./routes/timer.routes'));






const start = async () => {
    try {
        await mongoose.connect(mongoConnect,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });


        app.listen(PORT, () => {
            console.log(`Server has been started on ${PORT}...`)
        })
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1)
    }
};

start();


