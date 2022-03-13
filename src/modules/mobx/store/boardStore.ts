import { makeAutoObservable } from "mobx";
import { MakeMove, PlayerIdx, Square, Symbol } from "types";
import { calculateWinner } from "utils/calculateWinner";
import { DEFAULT_SIZE, DEFAULT_POINTS, DEFAULT_SYMBOL } from "utils/constants";
import { getEmptySquares } from "utils/getEmptySquares";
import { playersStore } from "./playersStore";

class Board {
  size = DEFAULT_SIZE;

  points = DEFAULT_POINTS;

  squares: Square[] = getEmptySquares(DEFAULT_SIZE);

  currentSymbol: Symbol = DEFAULT_SYMBOL;

  currentPlayer: PlayerIdx = 0;

  lastPlayerStarted: PlayerIdx = 0;

  started = true;

  winner: Symbol | null = null;

  draw = false;

  constructor() {
    makeAutoObservable(this);
  }

  startGame = (size: number, points: number) => {
    this.size = size;
    this.points = points;

    this.winner = null;
    this.draw = false;
    this.started = true;
    this.currentSymbol = DEFAULT_SYMBOL;

    this.currentPlayer = this.lastPlayerStarted === 0 ? 1 : 0;
    this.lastPlayerStarted = this.currentPlayer;

    this.squares = getEmptySquares(size);
  };

  makeMove: MakeMove = (squareId: number) => {
    if (!this.winner) {
      this.squares[squareId].symbol = this.currentSymbol;

      this.currentSymbol = this.currentSymbol === "X" ? "O" : "X";

      this.winner = calculateWinner(
        this.size,
        this.points,
        this.squares,
        squareId
      );

      if (
        !this.winner &&
        this.squares.filter(({ symbol }) => Boolean(symbol)).length ===
          this.size * this.size
      ) {
        this.draw = true;
      }

      if (!this.winner) {
        this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
      }

      if (this.winner || this.draw) {
        this.started = false;
        playersStore.updateStats(this.winner ? this.currentPlayer : null);
      }
    }
  };
}

export const boardStore = new Board();
