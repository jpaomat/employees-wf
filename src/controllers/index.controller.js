const pool = require('../database.conection'); // conexion de la db

const getEmployees = async (req, res) => {
    try {
        const employees = await pool.query('SELECT * FROM employees');
        return res.status(200).json(employees);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error');
    }
};

const getEmployeeById = async (req, res) => {
    try {
        const idEmployee = req.params.idEmployee;
        const employee = await pool.query('SELECT * FROM employees WHERE idEmployee=?', [idEmployee]);
        return res.status(200).json(employee);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error', error);
    }
};

const createEmployee = async(req, res) => {
    try {
        const { idEmployee, fullname, occupation, idBoss } = req.body;
        const query = 'INSERT INTO employees set ?';
        await pool.query(query, [{idEmployee, fullname, occupation, idBoss}]);
        return res.status(200).json({
            message: 'User created Successfully',
            body: req.body
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error');
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const idEmployee = req.params.idEmployee;
        await pool.query('DELETE FROM employees WHERE idEmployee=?', [idEmployee]);
        return res.status(200).json(`Employee ${idEmployee} deleted successfully`);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error');
    }
};

const editEmployee = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { idEmployee, fullname, occupation, idBoss } = req.body;
        await pool.query('UPDATE employees SET ? WHERE id=?', [{idEmployee, fullname, occupation, idBoss}, id]);
        return res.status(200).json(`Employee ${id} update successfully`);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error', error);
    }
};

module.exports = { getEmployees, getEmployeeById, createEmployee, deleteEmployee,  editEmployee}