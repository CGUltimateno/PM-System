const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    amount: { type: Number, required: true },
    billingDate: { type: Date, required: true },
    paymentStatus: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Billing', BillingSchema);