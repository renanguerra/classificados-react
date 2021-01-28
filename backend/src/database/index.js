const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Classificados = require('../models/Classificados')

const database = new Sequelize(dbConfig)

Classificados.init(database)

module.exports = database;