const express = require("express");
const router = express.Router();
const Booking = require("../model/bookings");
const { isAuthenticated } = require("../middleware/isAuthenticated");


    
  exports.bookAnEvent = async (req, res) => {
    try
     { 
      const { name, rollNumber, eventId,email } = req.body;
      console.log(req.body);
      const latestBook = await Booking.findOne().sort({id:-1});
      let id = latestBook? latestBook.id + 1 : 1;
      console.log(id);
      
      console.log(email);
      const book = await Booking.create({ id , name , rollNumber , email ,eventId});

      res.status(200).json({message : "Ticket Booked Successfully ",book});

    } catch (error) {
        console.log(error)
      res.status(500).json({ message: "Error Occured --> UnSuccessful"});
    }
  };