const express = require('express')
const router = express.Router()


// ROUTES


// RECORDING INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "recording index route"})
});

// RECORDING CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "recording create route"})
});

// RECORDING SHOW ROUTE
router.get("/:id", async (req, res) => {
    res.status(200).json({message: "recording show route: " + req.params.id})
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
