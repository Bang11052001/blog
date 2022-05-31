const express = require('express')
const app = express()
const port = 3000

app.get('/trangchu', (req, res) => {
    var a =3;
  res.send('Hello World1112222!')
})


var b =2;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}11`)
})