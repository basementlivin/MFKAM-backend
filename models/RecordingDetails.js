const mongoose = require("mongoose");

const RecordingSchema = new mongoose.Schema({
    performer: {type: mongoose.Schema.Types.ObjectId, ref: 'Performer'},
    location: {type: Number, required: true},
    environment: {type: String, required: true},
    notes: {type: String, required: false},
},{timestamps: true});

const RecordingDetails = mongoose.model("RecordingDetails", RecordingSchema);

module.exports = RecordingDetails
