const express = require('express');
const doctorController = require('../controllers/doctor.controller');

const router = express.Router();

// Create a new Doctor
router.post('/', doctorController.createDoctor);

// Retrieve all Doctors
router.get('/', doctorController.getDoctors);

// Retrieve a single Doctor by id
router.get('/:id', doctorController.getDoctorById);

// Update a Doctor by id
router.put('/:id', doctorController.updateDoctor);

// Delete a Doctor by id
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;