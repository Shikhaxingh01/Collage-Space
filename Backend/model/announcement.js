

const mongoose = require('mongoose')
const announcementSchema = new mongoose.Schema({

    id:{
        type:Number,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        required:true,
    },
    endDate:{
        type:Date,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    category: {
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 60 * 24 * 7 *3  // 7 days in seconds
    }
   
    // clubLeadId:{
    // type:String,
    // require:true
    // }

})


module.exports = mongoose.model('Announcement',announcementSchema);