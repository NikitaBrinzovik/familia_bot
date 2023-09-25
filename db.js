require('dotenv').config();
const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    process.env.NAME,
    process.env.DBLOGIN,
    process.env.DBPASSWORD,
    {
        host: process.env.HOST,
        port: process.env.PORT,
        dialect: process.env.DIALECT,
    }
)
