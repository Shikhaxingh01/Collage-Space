const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    image_url: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        required:true
    },
    // language:{
    //     type:String,
    //     required:true
    // },
    // duration:{
    //     type:String,
    //     required:true
    // },
    location:{
        type:String,
        required:true
    },
   
    price:{
       type:String,
       required:true,
    },
    about:{
        type:String,
        required:true
    },
    catchyLine:{
        type:String,
        required:true
    },
    presentedBy:{
        type:String,
        required:false
    },
    organizedBy:{
        type:String,
        required:false
    },
    eventHighlights:
        {
            type:[String],
            required:true
        }
    ,
    isAwarded:{
        type:Boolean,
        required:true

    },
    awards:
        {
            type:[String],
           
        }
    ,
    activities:{
            type:[String],
            
        }
    ,
    celebrityAppearances: {
        
             type: [String],
               
        
    },
      contactInfo: {
        phone: String,
        email: String
      },
      createdAt: {
        type: Date,
        default: Date.now
      } ,      
        
     
      detailedVenue:{
        type:String,
      },

    termsAndConditions: { type: [String], required: true }

    }
);

module.exports = mongoose.model('Event', eventSchema);