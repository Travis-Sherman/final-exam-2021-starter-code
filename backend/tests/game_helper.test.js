const gameHelper = require('../utils/game_helper')

describe("game helper unit tests", () => {
	test('a function named play', () => {
		expect(gameHelper.play).toBeDefined()
	})

	test('when neither ROCK, PAPER nor SCISSORS is played, expect undefined', () => {
		const result = gameHelper.play({player: 99, computer: 0})
		expect(result).toBe(undefined)
	})

	test('when player plays ROCK and computer plays ROCK, expect a draw', () => {
		const result = gameHelper.play({player: 0, computer: 0})
		expect(result).toBe('draw')
	})
	// TODO: write test to cover the other 8 cases

	test('when player plays PAPER and computer plays PAPER, expect a draw', () => {
		const result = gameHelper.play({player: 1, computer: 1})
		expect(result).toBe('draw')
	})
	
	test('when player plays SCISSORS and computer plays SCISSORS, expect a draw', () => {
		const result = gameHelper.play({player: 2, computer: 2})
		expect(result).toBe('draw')
	})
	test('when player plays ROCK and computer plays SCISSORS, expect a player win', () => {
		const result = gameHelper.play({player: 0, computer: 2})
		expect(result).toBe('player wins')
	})
	
	test('when player plays ROCK and computer plays PAPER, expect a computer win', () => {
		const result = gameHelper.play({player: 0, computer: 1})
		expect(result).toBe('computer wins')
	})

	test('when player plays PAPER and computer plays ROCK, expect a player win', () => {
		const result = gameHelper.play({player: 1, computer: 0})
		expect(result).toBe('player wins')
	})
	
	test('when player plays PAPER and computer player SCISSORS, expect a computer win', () => {
		const result = gameHelper.play({player: 1, computer: 2})
		expect(result).toBe('computer wins')
	})

	test('when player plays SCISSORS and computer plays PAPER, expect a player win', () => {
		const result = gameHelper.play({player: 2, computer: 1})
		expect(result).toBe('player wins')
	})
	
	test('when player plays SCISSORS and computer plays ROCK, expect a computer win', () => {
		const result = gameHelper.play({player: 2, computer: 0})
		expect(result).toBe('computer wins')
	})
})