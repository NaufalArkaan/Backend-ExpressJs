class TodoController {
    static getTodos(req,res){
        res.send('Page Todos Utama')
    }
    static addTodos(req,res){
        res.send('Page Todos Add')
    }
}

module.exports = TodoController