const appointment = require('../controllers/appointment.controller');
const express = require('express');

const router = express.Router();

// Create a new Appointment
router.post('/', appointment.createAppointment);

// Retrieve all Appointments
router.get('/', appointment.getAppointments);

// Retrieve a single Appointment by id
router.get('/:id', appointment.getAppointmentById);

// Update an Appointment by id
router.put('/:id', appointment.updateAppointment);

// Delete an Appointment by id
router.delete('/:id', appointment.deleteAppointment);

module.exports = router;