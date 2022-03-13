import {
  AnyAction,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";

import { PlayerIdx, Square, Symbol } from "types";
import { calculateWinner } from "utils/calculateWinner";
import { DEFAULT_SIZE, DEFAULT_POINTS, DEFAULT_SYMBOL } from "utils/constants";
import { getEmptySquares } from "utils/getEmptySquares";

import type { RootState } from ".";
import { updateStats } from "./playersSlice";

interface BoardState {
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

const initialState: BoardState = {
  size: DEFAULT_SIZE,
  points: DEFAULT_POINTS,
  squares: getEmptySquares(DEFAULT_SIZE),
  currentSymbol: DEFAULT_SYMBOL,
  currentPlayer: 0,
  lastPlayerStarted: 0,
  started: true,
  winner: null,
  draw: false,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    startGame: (
      state,
      action: PayloadAction<{ size: number; points: number }>
    ) => {
      const { size, points } = action.payload;

      state.size = size;
      state.points = points;

      state.winner = null;
      state.draw = false;
      state.started = true;
      state.currentSymbol = DEFAULT_SYMBOL;

      state.currentPlayer = state.lastPlayerStarted === 0 ? 1 : 0;
      state.lastPlayerStarted = state.currentPlayer;

      state.squares = getEmptySquares(size);
    },
    makeMove: (state, action: PayloadAction<{ squareId: number }>) => {
      const { squareId } = action.payload;

      if (!state.winner) {
        state.squares[squareId].symbol = state.currentSymbol;

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
        }
      }
    },
  },
});

export const { startGame } = boardSlice.actions;

export const makeMove =
  (params: {
    squareId: number;
  }): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    const {
      board: { winner, draw },
    } = getState();

    if (!winner && !draw) {
      dispatch(boardSlice.actions.makeMove(params));

      const {
        board: { winner, draw, currentPlayer },
      } = getState();

      if (winner || draw) {
        dispatch(updateStats(winner ? currentPlayer : null));
      }
    }
  };

export const selectBoard = (state: RootState) => state.board;

export default boardSlice.reducer;
