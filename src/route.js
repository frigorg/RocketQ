const express = require('express');
const QuestionController = require('./Controllers/QuestionController.js');

const route = express.Router()

const questionController = require('./Controllers/QuestionController.js');
const RoomController = require('./Controllers/RoomController.js');

route.get('/', (req, res)=> res.render('index', {page: 'enter-room'}));
route.get('/create-pass', (req, res)=> res.render('index', {page: 'create-pass'}));

route.get('/room/:roomId', RoomController.open);
route.post('/create-room', RoomController.create);
route.post('/enter-room', RoomController.enter)

route.post('/question/:room/:question/:action', QuestionController.index);
route.post('/question/create/:room', QuestionController.create);

module.exports = route;