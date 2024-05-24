const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    specialization: { type: String, required: true },
    schedule: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', DoctorSchema);