const express = require('express');
const connectToMongo = require('./DB');
const cors = require('cors');

connectToMongo();

const app = express();
app.use(cors());

app.use('/api/movies', require('./routes/search'));
app.use('/api/movies', require('./routes/favorite'));

app.listen(8000, () => {
    console.log("connect to mongo server , app listening at port 8000");
})
