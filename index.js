const Gameboard = (() => {
	const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	return { gameBoard };
})();

const player = (name) => {
	return { name };
};

const Gameflow = (() => {})();

const Players = (() => {
	const playerOne = player('Player 1');
	const playerTwo = player('Player 2');

	return { playerOne, playerTwo };
})();
