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
	// unbeatable makeMove function
	const makeMove = () => {
		switch (true) {
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
			case typeof Gameboard.gameBoard[4] !== 'string':
				Gameboard.gameBoard.splice(4, 1, sign);
				break;
			case typeof Gameboard.gameBoard[0] !== 'string':
				Gameboard.gameBoard.splice(0, 1, sign);
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
	//random Number generator
	const randomInt = (max) => {
		return Math.floor(Math.random() * max);
	};
	// randomMove for when it doesn't matter
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

//links tiles from html to javascript
const tileFactory = (id) => {
	const tile = document.getElementById(id);
	tile.addEventListener('click', () => Gameflow.move(id));
	return { tile };
};

//Gameboard module
const Gameboard = (() => {
	//Pop-up to display winner / tie
	const popUp = document.getElementById('pop-up');
	//Restart button
	const restart = document.getElementById('restart');
	restart.addEventListener('click', () => Gameflow.restartGame());
	// create initial arrays for gameBoard and tiles
	const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	const tileArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	// Create all tiles within the tileArray
	tileArray.map((tile) => {
		const i = tileArray.indexOf(tile);
		return (tileArray[i] = tileFactory(i).tile);
	});
	//renders html
	const render = () => {
		tileArray.forEach((tile) => {
			const i = gameBoard[tileArray.indexOf(tile)];
			typeof i === 'string' ? (tile.textContent = i) : (tile.textContent = '');
		});
	};
	return { gameBoard, tileArray, render, popUp, restart };
})();

//Gameflow Module
const Gameflow = (() => {
	//Create player + CPU
	const p1 = playerFactory('You', 'X');
	const p2 = compFactory('CPU', 'O');

	//Makes a move based on who's turn it is. If it's the users turn it waits for a click event to trigger
	const move = (id) => {
		// this array allows me to check if all tiles have already been used. It prevents an infite while loop and allows to check for a tie
		const array = Gameboard.gameBoard.filter((x) => typeof x === 'number');
		if (
			typeof Gameboard.gameBoard[id] !== 'string' &&
			Gameboard.popUp.textContent == ''
		) {
			//check if it's player 1 or player 2's turn
			if (p1.moveCount <= p2.moveCount) {
				p1.makeMove(id);
				p1.moveCount++;
				// if not all tiles have been used
				if (array[1] !== undefined) {
					//This allows for automatic CPU move by rerunning move() from the start
					setTimeout(function () {
						move();
					}, 150);
				}
				//CPU move which is run after player 1 makes his/her move
			} else {
				p2.makeMove();
				p2.moveCount++;
			}
			// Render html
			Gameboard.render();
			//declare the winner if checkResult() has found one otherwise tie if all tiles have been used
			declareResult(checkResult());
		}
	};
	const checkResult = () => {
		//array needed to check if all tiles have been used so it can declare a tie
		const array = Gameboard.gameBoard.filter((x) => typeof x === 'number');
		//check for winner
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

	//takes checkResult() as an input and declares winner / tie
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

	// resets the game
	const restartGame = () => {
		location.reload();
	};
	return { p1, p2, move, restartGame };
})();
