const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');

const PORT = process.env.PORT || 8080;

const app = express();
const url = 'mongodb://localhost:27017';


app.use(express.json());
app.use('/auth', authRouter)


const start = async () => {
    try {
        await mongoose.connect(url);
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT} http://localhost:${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}
start();