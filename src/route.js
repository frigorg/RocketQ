const express = require('express')

const route = express.Router()

const questionController = require('./Controllers/QuestionController.js');
const roomController = require('./Controllers/roomController.js');

route.get('/', (req, res)=> res.render('index', {page: 'enter-room'}));
route.get('/create-pass', (req, res)=> res.render('index', {page: 'create-pass'}));
route.get('/room/:roomId', (req, res)=> res.render('room'));

route.post('/question/:room/:question/:action', questionController.index);
route.post('/create-room', roomController.create);

module.exports = route;