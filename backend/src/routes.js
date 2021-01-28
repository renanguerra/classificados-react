const express = require('express');

const ClassificadosController = require('./controllers/ClassificadosController')

const routes = express.Router();

routes.post('/create', ClassificadosController.store)
routes.get('/index', ClassificadosController.index)
routes.get('/search/:title', ClassificadosController.indexSearch)


module.exports = routes;