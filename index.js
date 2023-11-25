const { config } = require('dotenv');
config();

const express = require('express');
const connectToMongo = require('./DB');
const cors = require('cors');
const AllRoutes = require('./routes/allRoutes');

connectToMongo();

const app = express();

// middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use('/api/movies', require('./routes/search'));
app.use('/api/movies', require('./routes/favorite'));
app.use("/api", AllRoutes);

app.listen(5000, () => {
    console.log("connect to mongo server , app listening at port 5000");
});

