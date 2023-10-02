const mongoose = require('mongoose');

const connectToMongo = () => {
    mongoose.connect('mongodb://localhost:27017/Test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectToMongo;