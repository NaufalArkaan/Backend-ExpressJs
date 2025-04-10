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
    static deleteTodo(req, res){
        let id = +req.params.id

        todo.destroy({
            where:{
                id
            }
        })
        .then(result => {
            if(result === 1){
                res.json({
                    massage: "Todo has been deleted!"
                })
            }else{
                res.json({
                    massage: "Todo failed to delete!"
                })
            }
        })
        .catch(err => {
            res.json(err)
        })
    }
    static updateTodo(req, res){
        let id = +req.params.id
        const{task, status} = req.body

        todo.update({
            task, status : Boolean(status)
        },{
            where: {
                id
            }
        })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
    }
}

module.exports = TodoController