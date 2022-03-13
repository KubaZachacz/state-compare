import { proxy, useSnapshot } from "valtio";

import { MakeMove, PlayerIdx, Square, Symbol } from "types";
import { calculateWinner } from "utils/calculateWinner";
import { DEFAULT_SIZE, DEFAULT_POINTS, DEFAULT_SYMBOL } from "utils/constants";
import { getEmptySquares } from "utils/getEmptySquares";
import { updateStats } from "./playersStore";

export interface BoardState {
  size: number;
  points: number;
  squares: Square[];
  currentSymbol: Symbol;
  currentPlayer: PlayerIdx;
  lastPlayerStarted: PlayerIdx;
  started: boolean;
  winner: Symbol | null;
  draw: boolean;
}

export const state: BoardState = proxy({
  size: DEFAULT_SIZE,
  points: DEFAULT_POINTS,
  squares: getEmptySquares(DEFAULT_SIZE),
  currentSymbol: DEFAULT_SYMBOL,
  currentPlayer: 0,
  lastPlayerStarted: 0,
  started: true,
  winner: null,
  draw: false,
});

export const startGame = (size: number, points: number) => {
  state.size = size;
  state.points = points;

  state.winner = null;
  state.draw = false;
  state.started = true;
  state.currentSymbol = DEFAULT_SYMBOL;
  state.currentPlayer = state.lastPlayerStarted === 0 ? 1 : 0;
  state.lastPlayerStarted = state.currentPlayer;

  state.squares = getEmptySquares(size);
};

export const makeMove: MakeMove = (squareId: number) => {
  if (!state.winner) {
    state.squares[squareId] = {
      symbol: state.currentSymbol,
    };

    state.currentSymbol = state.currentSymbol === "X" ? "O" : "X";

    state.winner = calculateWinner(
      state.size,
      state.points,
      state.squares,
      squareId
    );

    if (
      !state.winner &&
      state.squares.filter(({ symbol }) => Boolean(symbol)).length ===
        state.size * state.size
    ) {
      state.draw = true;
    }

    if (!state.winner) {
      state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
    }

    if (state.winner || state.draw) {
      state.started = false;
      updateStats(state.winner ? state.currentPlayer : null);
    }
  }
};

export const useBoardSnapshot = () => useSnapshot(state) as BoardState;
