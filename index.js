var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')

var config = require('./config.json')

var moviesController = require('./controllers/movies_controller')
var cartController = require('./controllers/cart_controller')

var app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}))

app.use(function(req, res, next) {
  console.log('body: ', req.body)
  next()
})

app.get('/movies', moviesController.index)
app.get('/movies/:id', moviesController.show)
app.put('/movies/:id', moviesController.update)
app.post('/movies', moviesController.create)
app.delete('/movies/:id', moviesController.destroy)

app.get('/cart', cartController.index)
app.post('/cart', cartController.create)

var port = 3000
app.listen(port, function() {
  console.log('listening on port: ', port)
})
