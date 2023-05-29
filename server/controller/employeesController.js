const Employee = require('../models/Employee');

async function getAllEmployees(req, res) {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getEmployeeById(req, res) {
  const { id } = req.params;
  try {
    const employee = await Employee.findByPk(id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createEmployee(req, res) {
  const { name, position } = req.body;
  try {
    const employee = await Employee.create({ name, position });
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateEmployee(req, res) {
  const { id } = req.params;
  const { name, position } = req.body;
  try {
    const employee = await Employee.findByPk(id);
    if (employee) {
      employee.name = name;
      employee.position = position;
      await employee.save();
      res.json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteEmployee(req, res) {
  const { id } = req.params;
  try {
    const employee = await Employee.findByPk(id);
    if (employee) {
      await employee.destroy();
      res.json({ message: 'Employee deleted successfully' });
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
