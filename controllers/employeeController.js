const Employee = require('../models/employee')

const msg = "Employee Not Found!";

exports.createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

exports.getEmployees = async (req, res) => {
    try {
        const { limit, offset, page, size } = req.pagination;

        const employees = await Employee.findAndCountAll({
            limit,
            offset,
            order: [['lastname', 'ASC']]
        });
        res.status(200).json({
            totalItems: employees.count,
            totalPages: Math.ceil(employees.count / limit),
            currentPage: page,
            employees: employees.rows
        });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (!employee) {
            return res.status(404).json({error: msg})
        }
        await employee.update(req.body);
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (!employee){
            return res.status(404).json({error: msg})
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (!employee) {
            return res.status(404).json({error: msg})
        }
        await employee.destroy();
        res.status(204).send();
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};