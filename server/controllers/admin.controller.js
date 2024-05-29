const Admin = require('../models/admin.model');

const createAdmin = async (req, res) => {
    const { username, email, password, firstName, lastName } = req.body;

    try {
        const admin = new Admin({
            username,
            email,
            password,
            firstName,
            lastName
        });

        await admin.save();
        res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) return res.status(404).json({ message: 'Admin not found' });
        res.json(admin);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateAdmin = async (req, res) => {
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate
        (req.params.id, req.body, { new: true });
        if (!updatedAdmin) return res.status(404).json({ message: 'Admin not found' });
        res.json(updatedAdmin);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteAdmin = async (req, res) => {
    try {
        const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
        if (!deletedAdmin) return res.status(404).json({ message: 'Admin not found' });
        res.json({ message: 'Admin deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createAdmin,
    getAdmins,
    getAdminById,
    updateAdmin,
    deleteAdmin
};