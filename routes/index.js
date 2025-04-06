const route = require('express').Router()

route.get('/', (req, res) => { //calback
    res.send('Hello World!')
  })
  
route.get('/todos', (req,res) =>{
    res.send('Page Todos Utama')
})

route.get('/items', (req,res) =>{
    res.send("Page Items Utama")
})
  
module.exports = route