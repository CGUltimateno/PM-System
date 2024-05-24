const express = require('express');
const patientController = require('../controllers/patient.controller');

const router = express.Router();

// Create a new Patient
router.post('/', patientController.createPatient);

// Retrieve all Patients
router.get('/', patientController.getPatients);

// Retrieve a single Patient by id
router.get('/:id', patientController.getPatientById);

// Update a Patient by id
router.put('/:id', patientController.updatePatient);

// Delete a Patient by id
router.delete('/:id', patientController.deletePatient);

module.exports = router;