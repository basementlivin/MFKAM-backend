const express = require('express')
const router = express.Router()
const {Performer} = require('../models')




// ROUTES


// USER INDEX ROUTE
router.get("/", async (req, res) => {
	try {
        res.json(await Performer.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// USER CREATE ROUTE
router.post("/", async (req, res) =>  {
    try {
        res.json(await Performer.create(req.body));
    } catch (error) {
	res.status(400).json(error);
    }
});

// USER SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
        res.json(await Performer.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// USER UPDATE ROUTE
router.put("/:id", async (req, res) => {
    try {
        res.json(await Performer.findByIdAndUpdate(req.params.id, req.body, {new:true}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// USER DELETE ROUTE
router.delete("/:id", async (req, res) => {
    try {
        res.json(await Performer.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router
