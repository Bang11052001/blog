const express = require('express')
var morgan = require('morgan')
const app = express()
const port = 3000


app.use(morgan('combined'))

app.get('/', (req, res) => {
    var a =3;
  res.send('Hello World1112222!')
})


var b =2;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}11`)
})