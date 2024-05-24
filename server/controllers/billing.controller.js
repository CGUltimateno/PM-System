const billing = require('../models/billing.model');

const getBillings = async (req, res) => {
    try {
        const billings = await billing.find();
        res.json(billings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getBillingById = async (req, res) => {
    try {
        const billing = await billing.findById(req.params.id);
        if (!billing) return res.status(404).json({ message: 'Billing not found' });
        res.json(billing);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createBilling = async (req, res) => {
    const { patientId, doctorId, amount, date } = req.body;
    const newBilling = new billing({ patientId, doctorId, amount, date });
    try {
        const savedBilling = await newBilling.save();
        res.status(201).json(savedBilling);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateBilling = async (req, res) => {
    try {
        const updatedBilling = await billing.findByIdAndUpdate
        (req.params.id, req.body, {new: true});
        if (!updatedBilling) return res.status(404).json({message: 'Billing not found'});
        res.json(updatedBilling);
    }
    catch (err) {
        res.status(400).json({message: err.message});
    }
}

const deleteBilling = async (req, res) => {
    try {
        const deletedBilling = await billing.findByIdAndDelete(req.params.id);
        if (!deletedBilling) return res.status(404).json({message: 'Billing not found'});
        res.json({message: 'Billing deleted'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    getBillings,
    getBillingById,
    createBilling,
    updateBilling,
    deleteBilling,
}