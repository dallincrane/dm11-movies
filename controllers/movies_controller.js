var movies = require('../models/movies')

module.exports = {
  index: function(req, res, next) {
    res.status(200).json(movies)
  },

  show: function(req, res, next) {
    res.status(200).json(movies[parseInt(req.params.id)])
  },

  update: function(req, res, next) {
    movies[req.params.id] = req.body
    res.status(200).json(movies)
  },

  create: function(req, res, next) {
    movies.push(req.body)
    res.status(200).json(movies)
  },

  destroy: function(req, res, next) {
    movies.splice(req.params.id, 1)
    res.sendStatus(204)
  },

}
