const express = require('express');
const router = express.Router();
const bookingController = require('../controller/booking');
const  isAuthenticated  = require("../middleware/isAuthenticated");

router
    .post('/bookanevent'  , bookingController.bookAnEvent);

module.exports = router ;    