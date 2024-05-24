const inventory = require('../controllers/inventory.controller');
const express = require('express');

const router = express.Router();

// Create a new Inventory
router.post('/', inventory.createInventory);

// Retrieve all Inventories
router.get('/', inventory.getInventories);

// Retrieve a single Inventory by id
router.get('/:id', inventory.getInventoryById);

// Update an Inventory by id
router.put('/:id', inventory.updateInventory);

// Delete an Inventory by id
router.delete('/:id', inventory.deleteInventory);

module.exports = router;