const express = require('express');
const ClientRoutes = express.Router();
const Client = require('../models/Clients');

// POST request to register for a job  
ClientRoutes.post('/register-client', async (req, res) => {
    try {
        const { interested_area, fname, lname, email, phone, company, jobtitle, message } = req.body;

        const newClient = await Client.create({
            interested_area: interested_area,
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            company: company,
            jobtitle: jobtitle,
            message: message
        });

        return res.status(201).json({
            text: "OK",
            id: newClient._id.toString(),
            interested_area: newClient.interested_area,
            fname: newClient.fname,
            lname: newClient.lname,
            email: newClient.email,
            phone: newClient.phone,
            company: newClient.company,
            jobtitle: newClient.jobtitle,
            message: newClient.message
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ messge: "ERROR", cause: error.message });
    }
});

module.exports = ClientRoutes;