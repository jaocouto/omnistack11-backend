const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');




routes.get('/ongs',OngController.index)
routes.post('/ongs',OngController.create)
routes.post('/incidents',IncidentController.create)
routes.get('/incidents',IncidentController.index)
routes.delete('/incidents',IncidentController.delete)


module.exports = routes;