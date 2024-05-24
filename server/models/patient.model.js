const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    insuranceInfo: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Patient', PatientSchema);