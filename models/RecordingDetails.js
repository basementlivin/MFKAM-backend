const mongoose = require("mongoose");

const RecordingSchema = new mongoose.Schema({
    artistname: {type: String, required: true},
    location: {type: String, required: true},
    environment: {type: String, required: true},
    length: {type: Number, required: true},
    notes: {type: String, required: false},
},{timestamps: true});

const RecordingDetails = mongoose.model("RecordingDetails", RecordingSchema);

module.exports = RecordingDetails
