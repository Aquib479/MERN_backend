const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/search', async (req, res) => {
    const title = req.query.title;
    const url = `http://www.omdbapi.com/?apikey=c21ccbb9&s=${title}`;
    await fetch(url).then(res => res.json()).then(data => res.send(data));
});

module.exports = router;