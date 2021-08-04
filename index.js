const playerFactory = (name, sign) => {
	let moveCount = 0;
	const makeMove = (id) => {
		Gameboard.gameBoard.splice(id, 1, sign);
	};

	return { name, sign, moveCount, makeMove };
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
		if (typeof Gameboard.gameBoard[id] !== 'string') {
			if (p1.moveCount <= p2.moveCount) {
				p1.makeMove(id);
				p1.moveCount++;
			} else {
				p2.makeMove(id);
				p2.moveCount++;
			}
			Gameboard.render();
			checkResult();
			declareResult();
		}
	};
	const checkResult = () => {
		switch (true) {
			case Gameboard.gameBoard[0] === Gameboard.gameBoard[1] &&
				Gameboard.gameBoard[1] === Gameboard.gameBoard[2]:
				return p1.sign === Gameboard.gameBoard[0] ? p1.name : p2.name;

			case Gameboard.gameBoard[3] === Gameboard.gameBoard[4] &&
				Gameboard.gameBoard[4] === Gameboard.gameBoard[5]:
				return p1.sign === Gameboard.gameBoard[3] ? p1.name : p2.name;

			case Gameboard.gameBoard[6] === Gameboard.gameBoard[7] &&
				Gameboard.gameBoard[7] === Gameboard.gameBoard[8]:
				return p1.sign === Gameboard.gameBoard[6] ? p1.name : p2.name;

			case Gameboard.gameBoard[0] === Gameboard.gameBoard[3] &&
				Gameboard.gameBoard[3] === Gameboard.gameBoard[6]:
				return p1.sign === Gameboard.gameBoard[0] ? p1.name : p2.name;

			case Gameboard.gameBoard[1] === Gameboard.gameBoard[4] &&
				Gameboard.gameBoard[4] === Gameboard.gameBoard[7]:
				return p1.sign === Gameboard.gameBoard[1] ? p1.name : p2.name;

			case Gameboard.gameBoard[2] === Gameboard.gameBoard[5] &&
				Gameboard.gameBoard[5] === Gameboard.gameBoard[8]:
				return p1.sign === Gameboard.gameBoard[2] ? p1.name : p2.name;

			case Gameboard.gameBoard[0] === Gameboard.gameBoard[4] &&
				Gameboard.gameBoard[4] === Gameboard.gameBoard[8]:
				return p1.sign === Gameboard.gameBoard[0] ? p1.name : p2.name;

			case Gameboard.gameBoard[2] === Gameboard.gameBoard[4] &&
				Gameboard.gameBoard[4] === Gameboard.gameBoard[6]:
				return p1.sign === Gameboard.gameBoard[2] ? p1.name : p2.name;
		}
	};
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
