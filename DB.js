const mongoose = require('mongoose');

const connectToMongo = () => {
    const url = process.env.MONGODB_URL
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectToMongo;