const gamesRouter = require('express').Router()
const Game = require('../models/games')
const gameHelper = require('../utils/game_helper')

gamesRouter.get('/', async (request, response) => {
	// TODO: complete implementation for GET all
  Game
    .find({})
    .then(result => {
      console.log(result)
      response.json(result)
    })
})

gamesRouter.post('/', async (request, response) => {
  const game = new Game(request.body)
	// TODO: implement input validation
	if (!gameHelper.isValidMove(game.computer) || !gameHelper.isValidMove(game.player)) {
        throw new Error("Invalid Game")
    }
  Game
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})


// TODO: implement DELETE /:id to remove a game
gamesRouter.delete('/:id', async (request, response) => {

  Game
    .findByIdAndRemove(request.params.id)
      .then(() => {
        response.status(204).end()
      }) 
     
})


// TODO: implement GET /:id for a specific game
gamesRouter.get('/:id', async (request, response) => {

  Game
    .findById(request.params.id)
      .then((game) => {
        response.json(game)
      }) 
    
      
})

module.exports = gamesRouter

