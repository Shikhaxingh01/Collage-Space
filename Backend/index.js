require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authRouter = require('./route/auth');
const eventRouter = require('./route/event');
const bookingRouter = require('./route/booking');
const announcementRouter = require('./route/announcement');
const port = process.env.PORT || 5000;
// const ORIGIN = process.env.ORIGIN;


app.use(cors({
     origin:"http://localhost:5173" , // Replace with your frontend URL
    credentials: true, // ✅ Ensures cookies are sent from frontend

 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('/', authRouter);
app.use('/api/event',eventRouter);
app.use('/api/bookEvent',bookingRouter);
app.use('/api/announcement',announcementRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});













