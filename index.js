// Create player factory function
const playerFactory = (name, sign) => {
	let moveCount = 0;
	const makeMove = (id) => {
		Gameboard.gameBoard.splice(id, 1, sign);
	};

	return { name, sign, moveCount, makeMove };
};

// Create computer factory function

const compFactory = (name, sign) => {
	let { moveCount } = playerFactory();
	const makeMove = () => {
		switch (true) {
			case typeof Gameboard.gameBoard[4] !== 'string':
				Gameboard.gameBoard.splice(4, 1, sign);
				break;
			case typeof Gameboard.gameBoard[0] !== 'string':
				Gameboard.gameBoard.splice(0, 1, sign);
				break;
			case Gameboard.gameBoard[0] === 'O' &&
				Gameboard.gameBoard[1] === 'O' &&
				typeof Gameboard.gameBoard[2] !== 'string':
				Gameboard.gameBoard.splice(2, 1, sign);
				break;
			case Gameboard.gameBoard[0] === 'O' &&
				Gameboard.gameBoard[2] === 'O' &&
				typeof Gameboard.gameBoard[1] !== 'string':
				Gameboard.gameBoard.splice(1, 1, sign);
				break;
			case Gameboard.gameBoard[1] === 'O' &&
				Gameboard.gameBoard[2] === 'O' &&
				typeof Gameboard.gameBoard[0] !== 'string':
				Gameboard.gameBoard.splice(0, 1, sign);
				break;
			case Gameboard.gameBoard[3] === 'O' &&
				Gameboard.gameBoard[4] === 'O' &&
				typeof Gameboard.gameBoard[5] !== 'string':
				Gameboard.gameBoard.splice(5, 1, sign);
				break;
			case Gameboard.gameBoard[3] === 'O' &&
				Gameboard.gameBoard[5] === 'O' &&
				typeof Gameboard.gameBoard[4] !== 'string':
				Gameboard.gameBoard.splice(4, 1, sign);
				break;
			case Gameboard.gameBoard[4] === 'O' &&
				Gameboard.gameBoard[5] === 'O' &&
				typeof Gameboard.gameBoard[3] !== 'string':
				Gameboard.gameBoard.splice(3, 1, sign);
				break;
			case Gameboard.gameBoard[6] === 'O' &&
				Gameboard.gameBoard[7] === 'O' &&
				typeof Gameboard.gameBoard[8] !== 'string':
				Gameboard.gameBoard.splice(8, 1, sign);
				break;
			case Gameboard.gameBoard[6] === 'O' &&
				Gameboard.gameBoard[8] === 'O' &&
				typeof Gameboard.gameBoard[7] !== 'string':
				Gameboard.gameBoard.splice(7, 1, sign);
				break;
			case Gameboard.gameBoard[7] === 'O' &&
				Gameboard.gameBoard[8] === 'O' &&
				typeof Gameboard.gameBoard[6] !== 'string':
				Gameboard.gameBoard.splice(6, 1, sign);
				break;
			case Gameboard.gameBoard[0] === 'O' &&
				Gameboard.gameBoard[3] === 'O' &&
				typeof Gameboard.gameBoard[6] !== 'string':
				Gameboard.gameBoard.splice(6, 1, sign);
				break;
			case Gameboard.gameBoard[0] === 'O' &&
				Gameboard.gameBoard[6] === 'O' &&
				typeof Gameboard.gameBoard[3] !== 'string':
				Gameboard.gameBoard.splice(3, 1, sign);
				break;
			case Gameboard.gameBoard[3] === 'O' &&
				Gameboard.gameBoard[6] === 'O' &&
				typeof Gameboard.gameBoard[0] !== 'string':
				Gameboard.gameBoard.splice(0, 1, sign);
				break;
			case Gameboard.gameBoard[1] === 'O' &&
				Gameboard.gameBoard[4] === 'O' &&
				typeof Gameboard.gameBoard[7] !== 'string':
				Gameboard.gameBoard.splice(7, 1, sign);
				break;
			case Gameboard.gameBoard[1] === 'O' &&
				Gameboard.gameBoard[7] === 'O' &&
				typeof Gameboard.gameBoard[4] !== 'string':
				Gameboard.gameBoard.splice(4, 1, sign);
				break;
			case Gameboard.gameBoard[4] === 'O' &&
				Gameboard.gameBoard[7] === 'O' &&
				typeof Gameboard.gameBoard[1] !== 'string':
				Gameboard.gameBoard.splice(1, 1, sign);
				break;
			case Gameboard.gameBoard[2] === 'O' &&
				Gameboard.gameBoard[5] === 'O' &&
				typeof Gameboard.gameBoard[8] !== 'string':
				Gameboard.gameBoard.splice(8, 1, sign);
				break;
			case Gameboard.gameBoard[2] === 'O' &&
				Gameboard.gameBoard[8] === 'O' &&
				typeof Gameboard.gameBoard[5] !== 'string':
				Gameboard.gameBoard.splice(5, 1, sign);
				break;
			case Gameboard.gameBoard[5] === 'O' &&
				Gameboard.gameBoard[8] === 'O' &&
				typeof Gameboard.gameBoard[2] !== 'string':
				Gameboard.gameBoard.splice(2, 1, sign);
				break;
			case Gameboard.gameBoard[0] === 'O' &&
				Gameboard.gameBoard[4] === 'O' &&
				typeof Gameboard.gameBoard[8] !== 'string':
				Gameboard.gameBoard.splice(8, 1, sign);
				break;
			case Gameboard.gameBoard[0] === 'O' &&
				Gameboard.gameBoard[8] === 'O' &&
				typeof Gameboard.gameBoard[4] !== 'string':
				Gameboard.gameBoard.splice(4, 1, sign);
				break;
			case Gameboard.gameBoard[4] === 'O' &&
				Gameboard.gameBoard[8] === 'O' &&
				typeof Gameboard.gameBoard[0] !== 'string':
				Gameboard.gameBoard.splice(0, 1, sign);
				break;
			case Gameboard.gameBoard[2] === 'O' &&
				Gameboard.gameBoard[4] === 'O' &&
				typeof Gameboard.gameBoard[6] !== 'string':
				Gameboard.gameBoard.splice(6, 1, sign);
				break;
			case Gameboard.gameBoard[2] === 'O' &&
				Gameboard.gameBoard[6] === 'O' &&
				typeof Gameboard.gameBoard[4] !== 'string':
				Gameboard.gameBoard.splice(4, 1, sign);
				break;
			case Gameboard.gameBoard[4] === 'O' &&
				Gameboard.gameBoard[6] === 'O' &&
				typeof Gameboard.gameBoard[2] !== 'string':
				Gameboard.gameBoard.splice(2, 1, sign);
				break;

			case Gameboard.gameBoard[0] === 'X' &&
				Gameboard.gameBoard[1] === 'X' &&
				typeof Gameboard.gameBoard[2] !== 'string':
				Gameboard.gameBoard.splice(2, 1, sign);
				break;
			case Gameboard.gameBoard[0] === 'X' &&
				Gameboard.gameBoard[2] === 'X' &&
				typeof Gameboard.gameBoard[1] !== 'string':
				Gameboard.gameBoard.splice(1, 1, sign);
				break;
			case Gameboard.gameBoard[1] === 'X' &&
				Gameboard.gameBoard[2] === 'X' &&
				typeof Gameboard.gameBoard[0] !== 'string':
				Gameboard.gameBoard.splice(0, 1, sign);
				break;
			case Gameboard.gameBoard[3] === 'X' &&
				Gameboard.gameBoard[4] === 'X' &&
				typeof Gameboard.gameBoard[5] !== 'string':
				Gameboard.gameBoard.splice(5, 1, sign);
				break;
			case Gameboard.gameBoard[3] === 'X' &&
				Gameboard.gameBoard[5] === 'X' &&
				typeof Gameboard.gameBoard[4] !== 'string':
				Gameboard.gameBoard.splice(4, 1, sign);
				break;
			case Gameboard.gameBoard[4] === 'X' &&
				Gameboard.gameBoard[5] === 'X' &&
				typeof Gameboard.gameBoard[3] !== 'string':
				Gameboard.gameBoard.splice(3, 1, sign);
				break;
			case Gameboard.gameBoard[6] === 'X' &&
				Gameboard.gameBoard[7] === 'X' &&
				typeof Gameboard.gameBoard[8] !== 'string':
				Gameboard.gameBoard.splice(8, 1, sign);
				break;
			case Gameboard.gameBoard[6] === 'X' &&
				Gameboard.gameBoard[8] === 'X' &&
				typeof Gameboard.gameBoard[7] !== 'string':
				Gameboard.gameBoard.splice(7, 1, sign);
				break;
			case Gameboard.gameBoard[7] === 'X' &&
				Gameboard.gameBoard[8] === 'X' &&
				typeof Gameboard.gameBoard[6] !== 'string':
				Gameboard.gameBoard.splice(6, 1, sign);
				break;
			case Gameboard.gameBoard[0] === 'X' &&
				Gameboard.gameBoard[3] === 'X' &&
				typeof Gameboard.gameBoard[6] !== 'string':
				Gameboard.gameBoard.splice(6, 1, sign);
				break;
			case Gameboard.gameBoard[0] === 'X' &&
				Gameboard.gameBoard[6] === 'X' &&
				typeof Gameboard.gameBoard[3] !== 'string':
				Gameboard.gameBoard.splice(3, 1, sign);
				break;
			case Gameboard.gameBoard[3] === 'X' &&
				Gameboard.gameBoard[6] === 'X' &&
				typeof Gameboard.gameBoard[0] !== 'string':
				Gameboard.gameBoard.splice(0, 1, sign);
				break;
			case Gameboard.gameBoard[1] === 'X' &&
				Gameboard.gameBoard[4] === 'X' &&
				typeof Gameboard.gameBoard[7] !== 'string':
				Gameboard.gameBoard.splice(7, 1, sign);
				break;
			case Gameboard.gameBoard[1] === 'X' &&
				Gameboard.gameBoard[7] === 'X' &&
				typeof Gameboard.gameBoard[4] !== 'string':
				Gameboard.gameBoard.splice(4, 1, sign);
				break;
			case Gameboard.gameBoard[4] === 'X' &&
				Gameboard.gameBoard[7] === 'X' &&
				typeof Gameboard.gameBoard[1] !== 'string':
				Gameboard.gameBoard.splice(1, 1, sign);
				break;
			case Gameboard.gameBoard[2] === 'X' &&
				Gameboard.gameBoard[5] === 'X' &&
				typeof Gameboard.gameBoard[8] !== 'string':
				Gameboard.gameBoard.splice(8, 1, sign);
				break;
			case Gameboard.gameBoard[2] === 'X' &&
				Gameboard.gameBoard[8] === 'X' &&
				typeof Gameboard.gameBoard[5] !== 'string':
				Gameboard.gameBoard.splice(5, 1, sign);
				break;
			case Gameboard.gameBoard[5] === 'X' &&
				Gameboard.gameBoard[8] === 'X' &&
				typeof Gameboard.gameBoard[2] !== 'string':
				Gameboard.gameBoard.splice(2, 1, sign);
				break;
			case Gameboard.gameBoard[0] === 'X' &&
				Gameboard.gameBoard[4] === 'X' &&
				typeof Gameboard.gameBoard[8] !== 'string':
				Gameboard.gameBoard.splice(8, 1, sign);
				break;
			case Gameboard.gameBoard[0] === 'X' &&
				Gameboard.gameBoard[8] === 'X' &&
				typeof Gameboard.gameBoard[4] !== 'string':
				Gameboard.gameBoard.splice(4, 1, sign);
				break;
			case Gameboard.gameBoard[4] === 'X' &&
				Gameboard.gameBoard[8] === 'X' &&
				typeof Gameboard.gameBoard[0] !== 'string':
				Gameboard.gameBoard.splice(0, 1, sign);
				break;
			case Gameboard.gameBoard[2] === 'X' &&
				Gameboard.gameBoard[4] === 'X' &&
				typeof Gameboard.gameBoard[6] !== 'string':
				Gameboard.gameBoard.splice(6, 1, sign);
				break;
			case Gameboard.gameBoard[2] === 'X' &&
				Gameboard.gameBoard[6] === 'X' &&
				typeof Gameboard.gameBoard[4] !== 'string':
				Gameboard.gameBoard.splice(4, 1, sign);
				break;
			case Gameboard.gameBoard[4] === 'X' &&
				Gameboard.gameBoard[6] === 'X' &&
				typeof Gameboard.gameBoard[2] !== 'string':
				Gameboard.gameBoard.splice(2, 1, sign);
				break;
			default:
				randomMove();
		}
	};
	const randomInt = (max) => {
		return Math.floor(Math.random() * max);
	};

	const randomMove = () => {
		let id = randomInt(9);
		while (typeof Gameboard.gameBoard[id] === 'string') {
			console.log(typeof Gameboard.gameBoard[id]);
			id = randomInt(9);
			console.log(id);
		}
		Gameboard.gameBoard.splice(id, 1, sign);
	};
	return { name, sign, moveCount, makeMove };
};

const tileFactory = (id) => {
	const tile = document.getElementById(id);
	tile.addEventListener('click', () => Gameflow.move(id));
	return { tile };
};

const Gameboard = (() => {
	const popUp = document.getElementById('pop-up');
	const restart = document.getElementById('restart');
	restart.addEventListener('click', () => Gameflow.restartGame());

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
	return { gameBoard, tileArray, render, popUp, restart };
})();

const Gameflow = (() => {
	const p1 = playerFactory('You', 'X');
	const p2 = compFactory('CPU', 'O');
	const move = (id) => {
		const array = Gameboard.gameBoard.filter((x) => typeof x === 'number');
		console.log(array);
		if (
			typeof Gameboard.gameBoard[id] !== 'string' &&
			Gameboard.popUp.textContent == ''
		) {
			if (p1.moveCount <= p2.moveCount) {
				p1.makeMove(id);
				p1.moveCount++;
				if (array[1] !== undefined) {
					console.log(array);
					setTimeout(function () {
						move();
					}, 150);
				}
			} else {
				p2.makeMove();
				p2.moveCount++;
			}
			Gameboard.render();
			declareResult(checkResult());
		}
	};
	const checkResult = () => {
		const array = Gameboard.gameBoard.filter((x) => typeof x === 'number');
		console.log(array);
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
			case array[0] === undefined:
				return 'tie';
		}
	};

	const declareResult = (result) => {
		if (result === 'tie') {
			Gameboard.popUp.textContent = "It's a tie";
		} else if (result === p1.name) {
			Gameboard.popUp.textContent = `${p1.name} win!`;
		} else if (result === p2.name) {
			Gameboard.popUp.textContent = `${p2.name} wins!`;
		}
		if (Gameboard.popUp.textContent != '') {
			Gameboard.popUp.style.display = 'block';
		}
	};

	const restartGame = () => {
		location.reload();
	};
	return { p1, p2, move, restartGame };
})();
