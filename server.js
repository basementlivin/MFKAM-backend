require("dotenv").config();
require('./config/db.connection')

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { PORT } = process.env;

const recordingController = require('./controllers/recording-controller');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use('/archive', recordingController)

// ROUTES
app.get("/", (req, res) => {
	res.send("hello world");
});


// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
