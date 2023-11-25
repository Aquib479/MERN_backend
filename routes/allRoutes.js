const express = require('express');
const allRoutes = express.Router();
const userRoutes = require('./user-routes');
const clientRoutes = require('./client-route');
const ContactRoutes = require('./contact-route');

allRoutes.use('/user', userRoutes);
allRoutes.use('/client', clientRoutes);
allRoutes.use('/contact', ContactRoutes);

module.exports = allRoutes;