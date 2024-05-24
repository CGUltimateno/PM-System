const Patient = require('../models/patient.model');

const getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({ message: 'Patient not found' });
        res.json(patient);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createPatient = async (req, res) => {
    const { firstName, lastName, dob, medicalHistory, contactDetails } = req.body;
    const newPatient = new Patient({ firstName, lastName, dob, medicalHistory, contactDetails });
    try {
        const savedPatient = await newPatient.save();
        res.status(201).json(savedPatient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updatePatient = async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPatient) return res.status(404).json({ message: 'Patient not found' });
        res.json(updatedPatient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deletePatient = async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        if (!deletedPatient) return res.status(404).json({ message: 'Patient not found' });
        res.json({ message: 'Patient deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getPatients,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient,
};