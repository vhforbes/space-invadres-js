class SpaceInvaders {
  rows;
  columns;

  constructor({ rows, columns }) {
    this.rows = rows;
    this.columns = columns;
  }

  drawBoard() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.style.display = "grid";
    gameBoard.className = "grid-container";

    gameBoard.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`;
    gameBoard.style.gridTemplateRows = `repeat(${this.rows}, 1fr)`;

    const createGrid = () => {
      const createColumnLine = () => {
        for (let i = 0; i < this.columns; i++) {
          const createdCell = gameBoard.appendChild(
            document.createElement("div")
          );

          createdCell.className = "grid-item";
        }
      };

      // Create column line for each row
      for (let i = 0; i < this.rows; i++) {
        createColumnLine();
      }
    };

    const spawnSpaceship = () => {
      // Pegar os ultimos COLUMN elements do cara

      const gameBoardChildren = [...gameBoard.children];

      const lastRowElements = gameBoardChildren.slice(
        gameBoard.children.length - this.columns,
        gameBoard.children.length
      );

      const columnToSpawn = Math.round(lastRowElements.length / 2) - 1;

      lastRowElements[columnToSpawn].style.backgroundColor = "red";

      return {
        x: columnToSpawn,
      };
    };

    createGrid();
    spawnSpaceship();
  }
}

const NewGame = new SpaceInvaders({ rows: 10, columns: 10 });

NewGame.drawBoard();
