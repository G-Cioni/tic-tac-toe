const playerFactory = (name, sign) => {
	let moveCount = 0;
	const makeMove = (e) => {
		Gameboard.gameBoard.splice(e, 1, sign);
		moveCounter();
	};

	const moveCounter = () => {
		console.log(this);
		moveCount++;
		console.log(moveCount);
	};
	return { name, sign, moveCount, makeMove, moveCounter };
};

const tileFactory = (id) => {
	const tile = document.getElementById(id);
	tile.addEventListener('click', () => Gameflow.move(id));
	return { tile };
};

const Gameflow = (() => {
	const p1 = playerFactory('Player 1', 'X');
	const p2 = playerFactory('Player 2', 'O');
	const move = (id) => {
		p1.moveCount <= p2.moveCount ? p1.makeMove(id) : p2.makeMove(id);
		Gameboard.render();
		checkResult();
		declareResult();
	};
	const checkResult = () => {};
	const declareResult = () => {};
	return { p1, p2, move };
})();

const Gameboard = (() => {
	const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	const tileArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	tileArray.map((tile) => {
		const i = tileArray.indexOf(tile);
		return (tileArray[i] = tileFactory(i).tile);
	});
	const render = () => {
		tileArray.forEach((tile) => {
			const i = gameBoard[tileArray.indexOf(tile)];
			typeof i === 'string' ? (tile.textContent = i) : (tile.textContent = '');
		});
	};
	return { gameBoard, tileArray, render };
})();
