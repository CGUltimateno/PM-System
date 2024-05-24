const Doctor = require('../models/doctor.model');

const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



const getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createDoctor = async (req, res) => {
    const { firstName, lastName, specialization, schedule } = req.body;
    const newDoctor = new Doctor({ firstName, lastName, specialization, schedule });
    try {
        const savedDoctor = await newDoctor.save();
        res.status(201).json(savedDoctor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateDoctor = async (req, res) => {
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate
        (req.params.id, req.body, {new: true});
        if (!updatedDoctor) return res.status(404).json({message: 'Doctor not found'});
        res.json(updatedDoctor);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

const deleteDoctor = async (req, res) => {
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!deletedDoctor) return res.status(404).json({message: 'Doctor not found'});
        res.json({message: 'Doctor deleted'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    getDoctors,
    getDoctorById,
    createDoctor,
    updateDoctor,
    deleteDoctor,
}