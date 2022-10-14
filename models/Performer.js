const mongoose = require("mongoose");

const PerformerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    performance_count: {type: Number, required: true, default: 0},
    recordings: [{type: mongoose.Schema.Types.ObjectId, ref: 'RecordingDetails'}],
},{timestamps: true});

const Performer = mongoose.model("Performer", PerformerSchema);

module.exports = Performer
