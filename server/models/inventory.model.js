const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    expirationDate: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Inventory', InventorySchema);