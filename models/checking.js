const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Checking extends Model {}

Checking.init(
    {

    }
);

module.exports = Checking;