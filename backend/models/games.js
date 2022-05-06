const mongoose = require('mongoose')
/*
Each Game entry has the following attributes
winner - string, either "player" or "computer"
moves - object {player: Move, computer: Move}
playedAt - Date

*/
const gameSchema = new mongoose.Schema({
	// TODO: complete schema
  winner: String,
  moves: {
    player: String,
    computer: String
  },
  playedAt: Date
})

gameSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Game = mongoose.model('Game', gameSchema)

module.exports = Game
