const playerFactory = (name, sign) => {
	moveCount = 0;
	makeMove = (e) => {
		gameBoard.splice(e, 1, sign);
		moveCount++;
	};
	return { name, sign, moveCount, makeMove };
};

const tileFactory = (id) => {
	const tile = document.getElementById(id);
	tile.addEventListener('click', () => move(id));
	return { tile };
};

const Gameflow = (() => {
	p1 = playerFactory('Player 1', 'X');
	p2 = playerFactory('Player 2', 'O');
	move = (id) => {
		p1.moveCount <= p2.moveCount ? p1.makeMove(id) : p2.makeMove(id);
		checkResult();
		declareResult();
	};
	checkResult = () => {};
	declareResult = () => {};
	return { p1, p2, move };
})();

const Gameboard = (() => {
	const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	const tileArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	tileArray.map((tile) => {
		const i = tileArray.indexOf(tile);
		return (tileArray[i] = tileFactory(i));
	});
	render = () => {};
	return { gameBoard, tileArray, render };
})();

console.log(Gameboard);
