const Employee = require("../models/employee");
const { v4: uuidv4 } = require('uuid');

// Create an employee
exports.createEmployee = async (req, res) => {
  try {
    const employeeData = { ...req.body, id: uuidv4() };
    const employee = await Employee.create(employeeData);
    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create employee" });
  }
};
