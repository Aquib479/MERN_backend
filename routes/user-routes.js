const express = require('express');
const UserRoutes = express.Router();
const User = require('../models/Users');

// POST request to register for a job  
UserRoutes.post('/register-user', async (req, res) => {
    try {
        const { interested_area, fname, lname, email, phone, company, jobtitle, message } = req.body;

        const newUser = await User.create({
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
            id: newUser._id.toString(),
            interested_area: newUser.interested_area,
            fname: newUser.fname,
            lname: newUser.lname,
            email: newUser.email,
            phone: newUser.phone,
            company: newUser.company,
            jobtitle: newUser.jobtitle,
            message: newUser.message
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ messge: "ERROR", cause: error.message });
    }
});

module.exports = UserRoutes;