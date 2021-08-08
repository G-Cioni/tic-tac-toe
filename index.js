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
	let board = Gameboard.gameBoard;
	let { moveCount } = playerFactory();
	// unbeatable makeMove function
	const makeMove = () => {
		//must fix bug: middle and corner with x. I win if i chose not to put x between o
		switch (true) {
			case board[0] === 'O' && board[6] === 'O' && typeof board[3] !== 'string':
				board.splice(3, 1, sign);
				break;
			case board[0] === 'O' && board[4] === 'O' && typeof board[8] !== 'string':
				board.splice(8, 1, sign);
				break;
			case board[0] === 'O' && board[8] === 'O' && typeof board[4] !== 'string':
				board.splice(4, 1, sign);
				break;
			case board[4] === 'O' && board[8] === 'O' && typeof board[0] !== 'string':
				board.splice(0, 1, sign);
				break;

			case board[0] === 'O' && board[1] === 'O' && typeof board[2] !== 'string':
				board.splice(2, 1, sign);
				break;
			case board[0] === 'O' && board[2] === 'O' && typeof board[1] !== 'string':
				board.splice(1, 1, sign);
				break;
			case board[1] === 'O' && board[2] === 'O' && typeof board[0] !== 'string':
				board.splice(0, 1, sign);
				break;
			case board[3] === 'O' && board[4] === 'O' && typeof board[5] !== 'string':
				board.splice(5, 1, sign);
				break;
			case board[3] === 'O' && board[5] === 'O' && typeof board[4] !== 'string':
				board.splice(4, 1, sign);
				break;
			case board[4] === 'O' && board[5] === 'O' && typeof board[3] !== 'string':
				board.splice(3, 1, sign);
				break;
			case board[6] === 'O' && board[7] === 'O' && typeof board[8] !== 'string':
				board.splice(8, 1, sign);
				break;
			case board[6] === 'O' && board[8] === 'O' && typeof board[7] !== 'string':
				board.splice(7, 1, sign);
				break;
			case board[7] === 'O' && board[8] === 'O' && typeof board[6] !== 'string':
				board.splice(6, 1, sign);
				break;
			case board[0] === 'O' && board[3] === 'O' && typeof board[6] !== 'string':
				board.splice(6, 1, sign);
				break;

			case board[3] === 'O' && board[6] === 'O' && typeof board[0] !== 'string':
				board.splice(0, 1, sign);
				break;
			case board[1] === 'O' && board[4] === 'O' && typeof board[7] !== 'string':
				board.splice(7, 1, sign);
				break;
			case board[1] === 'O' && board[7] === 'O' && typeof board[4] !== 'string':
				board.splice(4, 1, sign);
				break;
			case board[4] === 'O' && board[7] === 'O' && typeof board[1] !== 'string':
				board.splice(1, 1, sign);
				break;
			case board[2] === 'O' && board[5] === 'O' && typeof board[8] !== 'string':
				board.splice(8, 1, sign);
				break;
			case board[2] === 'O' && board[8] === 'O' && typeof board[5] !== 'string':
				board.splice(5, 1, sign);
				break;
			case board[5] === 'O' && board[8] === 'O' && typeof board[2] !== 'string':
				board.splice(2, 1, sign);
				break;

			case board[2] === 'O' && board[4] === 'O' && typeof board[6] !== 'string':
				board.splice(6, 1, sign);
				break;
			case board[2] === 'O' && board[6] === 'O' && typeof board[4] !== 'string':
				board.splice(4, 1, sign);
				break;
			case board[4] === 'O' && board[6] === 'O' && typeof board[2] !== 'string':
				board.splice(2, 1, sign);
				break;
			case board[6] === 'X' && board[8] === 'X' && typeof board[7] !== 'string':
				board.splice(7, 1, sign);
				break;
			case board[0] === 'X' && board[1] === 'X' && typeof board[2] !== 'string':
				board.splice(2, 1, sign);
				break;
			case board[0] === 'X' && board[2] === 'X' && typeof board[1] !== 'string':
				board.splice(1, 1, sign);
				break;
			case board[1] === 'X' && board[2] === 'X' && typeof board[0] !== 'string':
				board.splice(0, 1, sign);
				break;
			case board[3] === 'X' && board[4] === 'X' && typeof board[5] !== 'string':
				board.splice(5, 1, sign);
				break;
			case board[3] === 'X' && board[5] === 'X' && typeof board[4] !== 'string':
				board.splice(4, 1, sign);
				break;
			case board[4] === 'X' && board[5] === 'X' && typeof board[3] !== 'string':
				board.splice(3, 1, sign);
				break;
			case board[0] === 'X' && board[3] === 'X' && typeof board[6] !== 'string':
				board.splice(6, 1, sign);
				break;
			case board[0] === 'X' && board[6] === 'X' && typeof board[3] !== 'string':
				board.splice(3, 1, sign);
				break;
			case board[3] === 'X' && board[6] === 'X' && typeof board[0] !== 'string':
				board.splice(0, 1, sign);
				break;
			case board[1] === 'X' && board[4] === 'X' && typeof board[7] !== 'string':
				board.splice(7, 1, sign);
				break;
			case board[1] === 'X' && board[7] === 'X' && typeof board[4] !== 'string':
				board.splice(4, 1, sign);
				break;
			case board[4] === 'X' && board[7] === 'X' && typeof board[1] !== 'string':
				board.splice(1, 1, sign);
				break;

			case board[0] === 'X' && board[4] === 'X' && typeof board[8] !== 'string':
				board.splice(8, 1, sign);
				break;
			case board[0] === 'X' && board[8] === 'X' && typeof board[4] !== 'string':
				board.splice(4, 1, sign);
				break;
			case board[4] === 'X' && board[8] === 'X' && typeof board[0] !== 'string':
				board.splice(0, 1, sign);
				break;
			case board[4] === 'X' && board[8] === 'X' && typeof board[2] !== 'string':
				board.splice(2, 1, sign);
				break;
			case board[2] === 'X' && board[4] === 'X' && typeof board[6] !== 'string':
				board.splice(6, 1, sign);
				break;
			case board[2] === 'X' && board[6] === 'X' && typeof board[4] !== 'string':
				board.splice(4, 1, sign);
				break;
			case board[4] === 'X' && board[6] === 'X' && typeof board[2] !== 'string':
				board.splice(2, 1, sign);
				break;
			case board[0] === 'X' && board[5] === 'X' && typeof board[2] !== 'string':
				board.splice(2, 1, sign);
				break;
			case board[0] === 'X' && board[7] === 'X' && typeof board[6] !== 'string':
				board.splice(6, 1, sign);
				break;
			case board[5] === 'X' && board[6] === 'X' && typeof board[8] !== 'string':
				board.splice(8, 1, sign);
				break;
			case board[5] === 'X' && board[7] === 'X' && typeof board[8] !== 'string':
				board.splice(8, 1, sign);
				break;
			case board[2] === 'X' && board[5] === 'X' && typeof board[8] !== 'string':
				board.splice(8, 1, sign);
				break;
			case board[2] === 'X' && board[8] === 'X' && typeof board[5] !== 'string':
				board.splice(5, 1, sign);
				break;
			case board[5] === 'X' && board[8] === 'X' && typeof board[2] !== 'string':
				board.splice(2, 1, sign);
				break;
			case board[0] === 'X' && board[8] === 'X' && typeof board[7] !== 'string':
				board.splice(7, 1, sign);
				break;
			case board[2] === 'X' && board[6] === 'X' && typeof board[1] !== 'string':
				board.splice(1, 1, sign);
				break;
			case board[6] === 'X' && board[7] === 'X' && typeof board[8] !== 'string':
				board.splice(8, 1, sign);
				break;

			case board[7] === 'X' && board[8] === 'X' && typeof board[6] !== 'string':
				board.splice(6, 1, sign);
				break;
			case typeof board[4] !== 'string':
				board.splice(4, 1, sign);
				break;
			case typeof board[0] !== 'string':
				board.splice(0, 1, sign);
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
		while (typeof board[id] === 'string') {
			id = randomInt(9);
		}
		board.splice(id, 1, sign);
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
	let board = Gameboard.gameBoard;
	const move = (id) => {
		// this array allows me to check if all tiles have already been used. It prevents an infite while loop and allows to check for a tie
		const array = board.filter((x) => typeof x === 'number');
		if (typeof board[id] !== 'string' && Gameboard.popUp.textContent == '') {
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
		const array = board.filter((x) => typeof x === 'number');
		//check for winner
		switch (true) {
			case board[0] === board[1] && board[1] === board[2]:
				return p1.sign === board[0] ? p1.name : p2.name;

			case board[3] === board[4] && board[4] === board[5]:
				return p1.sign === board[3] ? p1.name : p2.name;

			case board[6] === board[7] && board[7] === board[8]:
				return p1.sign === board[6] ? p1.name : p2.name;

			case board[0] === board[3] && board[3] === board[6]:
				return p1.sign === board[0] ? p1.name : p2.name;

			case board[1] === board[4] && board[4] === board[7]:
				return p1.sign === board[1] ? p1.name : p2.name;

			case board[2] === board[5] && board[5] === board[8]:
				return p1.sign === board[2] ? p1.name : p2.name;

			case board[0] === board[4] && board[4] === board[8]:
				return p1.sign === board[0] ? p1.name : p2.name;

			case board[2] === board[4] && board[4] === board[6]:
				return p1.sign === board[2] ? p1.name : p2.name;
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
