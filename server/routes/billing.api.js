const billing = require('../controllers/billing.controller');
const express = require('express');

const router = express.Router();

// Create a new Billing
router.post('/', billing.createBilling);

// Retrieve all Billings
router.get('/', billing.getBillings);

// Retrieve a single Billing by id
router.get('/:id', billing.getBillingById);

// Update a Billing by id
router.put('/:id', billing.updateBilling);

// Delete a Billing by id
router.delete('/:id', billing.deleteBilling);

module.exports = router;