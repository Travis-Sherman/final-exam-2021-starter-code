
const isValidMove = n => {
	// TODO: complete implementation
	// HINT: Number has methods to check if a value is an integer
	return Number.isInteger(n) && 0 <= n && n <= 2
}

/*
	moves: {"player": number, "computer": number }
  ROCK : 0
  PAPER : 1 
  SCISSORS: 2
*/
const [ ROCK, PAPER, SCISSORS ] = [0, 1, 2]

const play = ({player, computer}) => {
  if (!isValidMove(player) || !isValidMove(computer)) return undefined;
	
	if (player === computer) {
		return "draw"
	}
	else if (player % 3 !== ((computer + 1) % 3)) {
		return "computer wins"
	}
	else {
		return "player wins"
	}
}


module.exports = {
	play
}
