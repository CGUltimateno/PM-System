const inventory = require('../models/inventory.model');

const getInventories = async (req, res) => {
    try {
        const inventories = await inventory.find();
        res.json(inventories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getInventoryById = async (req, res) => {
    try {
        const inventory = await inventory.findById(req.params.id);
        if (!inventory) return res.status(404).json({ message: 'Inventory not found' });
        res.json(inventory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createInventory = async (req, res) => {
    const { itemName, quantity, price } = req.body;
    const newInventory = new inventory({ itemName, quantity, price });
    try {
        const savedInventory = await newInventory.save();
        res.status(201).json(savedInventory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateInventory = async (req, res) => {
    try {
        const updatedInventory = await inventory.findByIdAndUpdate
        (req.params.id, req.body, {new: true});
        if (!updatedInventory) return res.status(404).json({message: 'Inventory not found'});
        res.json(updatedInventory);
    }
    catch (err) {
        res.status(400).json({message: err.message});
    }
}

const deleteInventory = async (req, res) => {
    try {
        const deletedInventory = await inventory.findByIdAndDelete(req.params.id);
        if (!deletedInventory) return res.status(404).json({message: 'Inventory not found'});
        res.json({message: 'Inventory deleted'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    getInventories,
    getInventoryById,
    createInventory,
    updateInventory,
    deleteInventory,
}
