const Admin = require('../models/admin.model');
const Doctor = require('../models/doctor.model');
const Patient = require('../models/patient.model');

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        let user;
        let role;

        // Check if user is an Admin
        user = await Admin.findOne({ username });
        if (user && user.password === password) {
            role = 'admin';
        } else {
            // Check if user is a Doctor
            user = await Doctor.findOne({ username });
            if (user && user.password === password) {
                role = 'doctor';
            } else {
                // Check if user is a Patient
                user = await Patient.findOne({ username });
                if (user && user.password === password) {
                    role = 'patient';
                }
            }
        }

        if (user) {
            res.status(200).json({ message: `You're logged in as ${role}` });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { login };
