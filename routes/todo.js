const todoRoute = require('express').Router()
const TodoController = require('../controllers/TodoController')

todoRoute.get('/', TodoController.getTodos)

todoRoute.post('/add', TodoController.addTodos)

todoRoute.get('/find/:id', TodoController.findById)

module.exports = todoRoute