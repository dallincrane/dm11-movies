var express = require('express')
var bodyParser = require('body-parser')

var moviesController = require('./controllers/movies_controller')

var app = express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.use(function(req, res, next) {
  console.log('body: ', req.body)
  next()
})

app.get('/movies', moviesController.index)
app.get('/movies/:id', moviesController.show)
app.put('/movies/:id', moviesController.update)
app.post('/movies', moviesController.create)
app.delete('/movies/:id', moviesController.destroy)

var port = 3000
app.listen(port, function() {
  console.log('listening on port: ', port)
})
