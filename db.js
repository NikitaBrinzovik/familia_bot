require('dotenv').config();
const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'telega_bot',
    'root',
    '_1root',
    {
        host: '94.26.237.93',
        port: '5432',
        dialect: 'postgres',
    }
)
