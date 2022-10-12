const express = require('express')
const router = express.Router()
const {RecordingDetails} = require('../models')




// ROUTES


// RECORDING INDEX ROUTE
router.get("/", async (req, res) => {
	try {
        res.json(await RecordingDetails.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// RECORDING CREATE ROUTE
router.post("/", async (req, res) =>  {
    try {
        res.json(await RecordingDetails.create(req.body));
    } catch (error) {
	res.status(400).json(error);
    }
});

// RECORDING SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
        res.json(await RecordingDetails.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// RECORDING DELETE ROUTE
router.delete("/:id", async (req, res) => {
    res.status(200).json({message: "recording delete route: " + req.params.id})
});

// RECORDING UPDATE ROUTE
router.put("/:id", async (req, res) => {
    res.status(200).json({message: "recording update route: " + req.params.id})
});


module.exports = router
