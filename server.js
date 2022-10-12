// DEPENDENCIES

// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;

// import express
const express = require("express");

// create application object
const app = express();




// ROUTES

// TEST ROUTE
app.get("/", (req, res) => {
	res.send("hello world");
});


// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
