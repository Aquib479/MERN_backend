const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const fs = require('fs');

// location of fileapath in the directory !!
const filePath = './favoriteMovie/favorite.json';

// function to read and write the favorite movie data in file !!
function addJsonData(MovieData) {

    // Read the existing data from the file, or create an empty array, if there is no data
    let Data = [];
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        Data = JSON.parse(data);
    } catch (error) {
        console.log("no such file/empty file");
    }


    // Add the new data to the array
    Data.unshift(MovieData);

    // Convert the array of JSON objects to a string
    const jsonString = JSON.stringify(Data, null, 2);

    // write Stringified data to file !!
    fs.writeFileSync(filePath, jsonString, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing JSON list to file:', err);
        } else {
            console.log('JSON list has been updated');
        }
    });
    return Data;
}



// Function to delete JSON data based on a condition
function deleteJsonData(Movie_id) {
    // Read the existing data from the file, or create an empty array, if there is no data
    let Data = [];
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        Data = JSON.parse(data);
    } catch (error) {
        console.error('Error reading JSON list from file:', error);
        return;
    }

    // Identify and remove the data that matches the condition
    Data = Data.filter(item => item.imdbID !== Movie_id);

    // Convert the array of JSON objects to a string
    const jsonString = JSON.stringify(Data, null, 2);

    // Write the stringified JSON back to the file
    fs.writeFileSync(filePath, jsonString, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing JSON list to file:', err);
        } else {
            console.log('JSON list has been updated');
        }
    });
    return Data;
}

// Get request to get all the favorite movies of user !!
router.get('/favorite', async (req, res) => {
    fs.readFile(filePath, 'utf8', (err, file) => {

        // check for any errors
        if (err) {
            console.error('Error while reading the file:', err)
            return;
        }
        try {
            const data = JSON.parse(file);
            res.send(data);
        } catch (err) {
            console.error('Error while parsing JSON data:', err)
        }
    });
})

// Post request to add JSON object into the file !!
router.post('/favorite', async (req, res) => {
    const id = req.query.Id;
    const data = {
        "id": id
    }
    const url = `http://www.omdbapi.com/?i=${id}&apikey=c21ccbb9`;
    await fetch(url).then(res => res.json()).then(response => {
        const value = addJsonData(response);
        res.send(value);
    });

});

// delete request to remove exact data from file !!
router.delete('/favorite', async (req, res) => {
    const id = req.query.Id;
    const value = deleteJsonData(id);
    res.send(value);
})


module.exports = router;