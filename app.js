const express = require('express') //Mengambil package dari express
const app = express()
const port = 3000

const routes = require('./routes')
app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})