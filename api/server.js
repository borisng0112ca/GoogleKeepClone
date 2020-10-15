const dotenv = require('dotenv');
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const session = require("express-session");
const passport = require('passport');
const cors = require('cors');
const { options } = require('./routes');

//configuring dotenv file
dotenv.config({path: './config/config.env'});

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",  //pointing to whereever the react app is
  credentials: true,
}))
app.use(express.static(__dirname + '../client/public'));
const PORT = process.env.PORT || 4000;

//morgan to show status code
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Sessions
app.use(session({
  secret:'doesnt really matter',
  resave: false,  //not saving a session if nothing is modified
  saveUninitialized: false, //not creating a session until something is stored
}));

//passport middleware
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

//MongoDB Atlas connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection with MongoDB successfully established");
});

//start server
app.listen(PORT, () => {
  console.log("The server started at port " + PORT);
});
