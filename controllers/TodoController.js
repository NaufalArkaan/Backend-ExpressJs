class TodoController {
    static getTodos(req,res){
        const arrObjects = [
            {
                id: 1,
                name: "laptop"
            },
            {
                id : 2,
                name: "speaker"
            }
        ]
        res.json(arrObjects)
    }
    static addTodos(req,res){
        res.json({
            massage : "Page Todo Add"
        })
    }
}

module.exports = TodoController