const admin = require('../controllers/admin.controller');
const router = require('express').Router();

// Create a new Admin
router.post('/', admin.createAdmin);

// Retrieve all Admins
router.get('/', admin.getAdmins);

// Retrieve a single Admin by id
router.get('/:id', admin.getAdminById);

// Update a Admin by id
router.put('/:id', admin.updateAdmin);

// Delete a Admin by id
router.delete('/:id', admin.deleteAdmin);

module.exports = router;