const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    NID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    dpt: {
        type: DataTypes.ENUM,
        values: ['HR', 'Sales', 'Marketing', 'IT'],
        allowNull: false
    },
    position: {
        type: DataTypes.ENUM,
        values: ['Manager', 'Trainer', 'Associate','Analyst', 'Researcher', 'Developer'],
        allowNull: false
    },
    laptop_manufacturer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    laptop_model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SN: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
},{
    tableName: 'employees',
    timestamps: false
});

module.exports = Employee;