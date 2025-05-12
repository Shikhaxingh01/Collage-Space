const express = require('express');
const router = express.Router();
const eventController = require('../controller/event');


router
    .get('/getevent', eventController.getAllEvents)
    .get('/getevent/:id',eventController.getEventById)
    .post('/addevent',eventController.addEvent)

module.exports = router;