const mongoose = require("mongoose");

const PerformerSchema = new mongoose.Schema({
    artistname: {type: String, required: true},
    email: {type: String, required: true},
    location: {type: Number, required: true},
},{timestamps: true});

const Performer = mongoose.model("Performer", PerformerSchema);

module.exports = Performer
