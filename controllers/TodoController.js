const {todo} = require('../models')

class TodoController {
    static getTodos(req,res){
        todo.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
        .then(todos => {
            res.json(todos)
        })
        .catch(err => {
            res.json(err)
        })
    }
    static addTodos(req,res){
       const {task, status} = req.body;

       todo.create({
        task, status
       })
       .then(result => {
            res.json(result)
       })
       .catch(err => {
            res.json(err)
       })
    }
    static findById(req, res){
        let id = +req.params.id
        todo.findByPk(id)
        .then(result => {
            if(result !== null){
                res.json(result)
            }else{
                res.json({
                    massage: "Todo not found."
                })
            }
        })
        .catch(err => {
            res.json(err)
        })
        console.log(req.params)
    }
}

module.exports = TodoController