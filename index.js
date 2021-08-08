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
		let bestScore = -Infinity;
		let move;
		let board = Gameboard.gameBoard;
		let sign = Gameflow.p2.sign;
		for (let i = 0; i < board.length; i++) {
			if (typeof board[i] === 'number') {
				const ogValue = board[i];
				board[i] = sign;
				let score = minimax(board, 0, false);
				board[i] = ogValue;
				if (score > bestScore) {
					bestScore = score;
					move = i;
				}
			}
		}
		board[move] = sign;
	};

	const minimax = (board, depth, isMaximizing) => {
		let result = Gameflow.checkResult();
		if (result != null) {
			return scores[result];
		}
		if (isMaximizing) {
			let bestScore = -Infinity;
			for (let i = 0; i < board.length; i++) {
				if (typeof board[i] === 'number') {
					const ogValue = board[i];
					board[i] = sign;
					let score = minimax(board, depth + 1, false);
					board[i] = ogValue;
					bestScore = Math.max(score, bestScore);
				}
			}
			// console.log(`Maximizing: ${bestScore}`);
			return bestScore;
		} else {
			let bestScore = Infinity;
			for (let i = 0; i < board.length; i++) {
				if (typeof board[i] === 'number') {
					const ogValue = board[i];
					board[i] = Gameflow.p1.sign;
					let score = minimax(board, depth + 1, true);
					board[i] = ogValue;
					bestScore = Math.min(score, bestScore);
				}
			}
			console.log(`Minimizing: ${bestScore}`);
			return bestScore;
		}
	};
	const scores = {
		O: 1,
		X: -1,
		tie: 0,
	};

	// board.splice(id, 1, sign);
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
	const board = Gameboard.gameBoard;

	//Makes a move based on who's turn it is. If it's the users turn it waits for a click event to trigger
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
			case typeof board[0] === 'string' &&
				board[0] === board[1] &&
				board[1] === board[2]:
				return p1.sign === board[0] ? p1.sign : p2.sign;

			case typeof board[3] === 'string' &&
				board[3] === board[4] &&
				board[4] === board[5]:
				return p1.sign === board[3] ? p1.sign : p2.sign;

			case typeof board[6] === 'string' &&
				board[6] === board[7] &&
				board[7] === board[8]:
				return p1.sign === board[6] ? p1.sign : p2.sign;

			case typeof board[0] === 'string' &&
				board[0] === board[3] &&
				board[3] === board[6]:
				return p1.sign === board[0] ? p1.sign : p2.sign;

			case typeof board[1] === 'string' &&
				board[1] === board[4] &&
				board[4] === board[7]:
				return p1.sign === board[1] ? p1.sign : p2.sign;

			case typeof board[2] === 'string' &&
				board[2] === board[5] &&
				board[5] === board[8]:
				return p1.sign === board[2] ? p1.sign : p2.sign;

			case typeof board[0] === 'string' &&
				board[0] === board[4] &&
				board[4] === board[8]:
				return p1.sign === board[0] ? p1.sign : p2.sign;

			case typeof board[2] === 'string' &&
				board[2] === board[4] &&
				board[4] === board[6]:
				return p1.sign === board[2] ? p1.sign : p2.sign;

			case array[0] === undefined:
				return null;
		}
	};

	//takes checkResult() as an input and declares winner / tie
	const declareResult = (result) => {
		if (result === null) {
			Gameboard.popUp.textContent = "It's a tie";
		} else if (result === p1.sign) {
			Gameboard.popUp.textContent = `${p1.name} win!`;
		} else if (result === p2.sign) {
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
	return { p1, p2, move, restartGame, checkResult };
})();
