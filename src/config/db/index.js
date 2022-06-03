const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/course';

// Use connect method to connect to the Server
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/course');
        console.log('success !!!!');
    } catch (error) {
        console.log('Error', error);
    }
}

module.exports = { connect: connect };
