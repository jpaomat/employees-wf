const express = require('express');
const router = express.Router();
const { getEmployees, getEmployeeById, createEmployee, deleteEmployee, editEmployee } = require('../controllers/index.controller');

//ROUTES
router.get('/employees', getEmployees);
router.get('/employees/:idEmployee', getEmployeeById);
router.post('/employees', createEmployee);
router.post('/employees', createEmployee);
router.delete('/employees/:idEmployee', deleteEmployee);
router.put('/employees/:id', editEmployee);

module.exports = router;