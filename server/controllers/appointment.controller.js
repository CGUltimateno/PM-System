const appointment = require('../models/appointment.model');

const getAppointments = async (req, res) => {
    try {
        const appointments = await appointment.find();
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getAppointmentById = async (req, res) => {
    try {
        const appointment = await appointment.findById(req.params.id);
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json(appointment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createAppointment = async (req, res) => {
    const { patientId, doctorId, date, time } = req.body;
    const newAppointment = new appointment({ patientId, doctorId, date, time });
    try {
        const savedAppointment = await newAppointment.save();
        res.status(201).json(savedAppointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateAppointment = async (req, res) => {
    try {
        const updatedAppointment = await appointment.findByIdAndUpdate
        (req.params.id, req.body, {new: true});
        if (!updatedAppointment) return res.status(404).json({message: 'Appointment not found'});
        res.json(updatedAppointment);
    }
    catch (err) {
        res.status(400).json({message: err.message});
    }
}

const deleteAppointment = async (req, res) => {
    try {
        const deletedAppointment = await appointment.findByIdAndDelete(req.params.id);
        if (!deletedAppointment) return res.status(404).json({message: 'Appointment not found'});
        res.json({message: 'Appointment deleted'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    getAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment,
}