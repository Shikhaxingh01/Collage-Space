const express = require('express');
const router = express.Router()
const announcementController = require('../controller/announcement');



router
      .get('/announcement',announcementController.getannouncement)
      .post('/addannouncement',announcementController.addAnnouncement);

module.exports = router ;     