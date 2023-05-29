const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');

// Create an employee
router.post('/employees', adminController.createEmployee);

module.exports = router;
