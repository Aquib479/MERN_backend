const mongoose = require('mongoose');

const connectToMongo = () => {
    mongoose.connect('mongodb+srv://mdaquib479:Mohammad786@cluster0.xbx47ho.mongodb.net/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectToMongo;