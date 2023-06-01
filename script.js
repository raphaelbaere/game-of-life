// Tamanho do tabuleiro
const width = 800;
const height = 600;

const boxes = 4800;

const gameBoard = document.querySelector('#game-of-life-board');
const startGameButton = document.querySelector('#start-game-button');
const nextGenerationButton = document.querySelector('#next-generation-button');

let board = [];

// Criar o tabuleiro

// Função para exibir o tabuleiro
function displayBoard() {
  for (let i = 0; i < boxes; i++) {
    if (Math.random() < 0.5) {
        const div = document.createElement('div');
        div.style.width = '10px';
        div.style.height = '10px';
        div.style.backgroundColor = 'green';
        div.className = 'alive';
        board[i] = div;
        gameBoard.appendChild(div);
    } else {
        const div = document.createElement('div');
        div.style.width = '10px';
        div.style.height = '10px';
        div.style.backgroundColor = 'white';
        div.className = 'dead';
        board[i] = div;
        gameBoard.appendChild(div);
    }
  }
}

function nextGeneration() {
    gameBoard.innerHTML = '';
    const boardReformed = [];
    for (let i = 0; i < board.length; i += 80) {
      const chunk = board.slice(i, i + 80);
      boardReformed.push(chunk);
    }

    // i é y
    // j é x
    for (let i = 0; i < boardReformed.length; i++) {
        for (let j = 0; j < boardReformed[i].length; j++) {
            let numberOfAliveNeighbors = 0; 
            if (boardReformed[i][j + 1]) {
                if (boardReformed[i][j + 1].className === 'alive') {
                    numberOfAliveNeighbors += 1;
                }
            }

            if (boardReformed[i][j - 1]) {
                if (boardReformed[i][j - 1].className === 'alive') {
                    numberOfAliveNeighbors += 1;
                }
            }

            if (boardReformed[i + 1]) {

            if (boardReformed[i + 1][j]) {
                if (boardReformed[i + 1][j].className === 'alive') {
                    numberOfAliveNeighbors += 1;
                }
            }

            if (boardReformed[i + 1][j + 1]) {
                if (boardReformed[i + 1][j + 1].className === 'alive') {
                    numberOfAliveNeighbors += 1;
                }
            }

            if (boardReformed[i + 1][j - 1]) {
                if (boardReformed[i + 1][j - 1].className === 'alive') {
                    numberOfAliveNeighbors += 1;
                }
            }
            }

            if (boardReformed[i - 1]) {
                if (boardReformed[i - 1][j]) {
                    if (boardReformed[i - 1][j].className === 'alive') {
                        numberOfAliveNeighbors += 1;
                    }
                }
    
                if (boardReformed[i - 1][j + 1]) {
                    if (boardReformed[i - 1][j + 1].className === 'alive') {
                        numberOfAliveNeighbors += 1;
                    }
                }
    
                if (boardReformed[i - 1][j - 1]) {
                    if (boardReformed[i - 1][j - 1].className === 'alive') {
                        numberOfAliveNeighbors += 1;
                    }
                }
            }

            if (boardReformed[i][j].className === 'dead' && numberOfAliveNeighbors === 3) {
                const div = document.createElement('div');
                div.style.width = '10px';
                div.style.height = '10px';
                div.style.backgroundColor = 'green';
                div.className = 'alive';
                board[i] = div;
                gameBoard.appendChild(div);
              } else if (boardReformed[i][j].className === 'alive' && (numberOfAliveNeighbors < 2 || numberOfAliveNeighbors > 3)) {
                const div = document.createElement('div');
                div.style.width = '10px';
                div.style.height = '10px';
                div.style.backgroundColor = 'white';
                div.className = 'dead';
                board[i] = div;
                gameBoard.appendChild(div);
              } else {
                board[i] = boardReformed[i][j];
                gameBoard.appendChild(boardReformed[i][j]);
              }
        }
    }
}


// Executar o jogo
function runGameOfLife() {
  displayBoard();
  setInterval(() => {
    nextGeneration()
 }, 1000); // Atualizar a cada 1 segundo
}

// Iniciar o jogo
startGameButton.addEventListener('click', runGameOfLife);