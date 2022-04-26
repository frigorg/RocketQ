const express = require('express')

const route = express.Router()

const questionController = require('./Controllers/QuestionController.js');
const RoomController = require('./Controllers/RoomController.js');

route.get('/', (req, res)=> res.render('index', {page: 'enter-room'}));
route.get('/create-pass', (req, res)=> res.render('index', {page: 'create-pass'}));
route.get('/room/:roomId', RoomController.Open);

route.post('/question/:room/:question/:action', questionController.index);
route.post('/create-room', RoomController.create);

module.exports = route;