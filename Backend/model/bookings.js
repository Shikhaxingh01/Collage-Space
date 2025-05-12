const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
       type:String       
    },
    rollNumber:{
        type:String,
        
       
    },
    email:{
        type:String,
       
        
    },
    eventId:{
        type: Number,
        required: true
    }
    }
);
    
module.exports = mongoose.model('Booking', bookingSchema);