import {
  FC,
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";
import { cloneDeep } from "lodash";

import { PlayerIdx, Square, StartGame, MakeMove, Symbol } from "types";
import { calculateWinner } from "utils/calculateWinner";
import { DEFAULT_SIZE, DEFAULT_POINTS, DEFAULT_SYMBOL } from "utils/constants";
import { getEmptySquares } from "utils/getEmptySquares";
import { usePlayersActionsContext, usePlayersContext } from "./playersContext";

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

const BoardContext = createContext(cloneDeep(initialState));

interface BoardActions {
  startGame: StartGame;
  makeMove: MakeMove;
}

const BoardActionsContext = createContext<BoardActions>({
  startGame: () => {},
  makeMove: () => {},
});

export const BoardProvider: FC = ({ children }) => {
  const { updateStats } = usePlayersActionsContext();

  const [state, setState] = useState(cloneDeep(initialState));

  const startGame = useCallback<StartGame>((size, points) => {
    setState((state) => {
      const newState = cloneDeep(state);

      newState.size = size;
      newState.points = points;

      newState.winner = null;
      newState.draw = false;
      newState.started = true;
      newState.currentSymbol = DEFAULT_SYMBOL;

      newState.currentPlayer = newState.lastPlayerStarted === 0 ? 1 : 0;
      newState.lastPlayerStarted = newState.currentPlayer;

      newState.squares = getEmptySquares(size);

      return newState;
    });
  }, []);

  const makeMove = useCallback<MakeMove>((squareId) => {
    setState((state) => {
      const newState = cloneDeep(state);

      if (!newState.winner) {
        newState.squares[squareId] = {
          ...newState.squares[squareId],
          symbol: newState.currentSymbol,
        };

        newState.currentSymbol = newState.currentSymbol === "X" ? "O" : "X";

        newState.winner = calculateWinner(
          newState.size,
          newState.points,
          newState.squares,
          squareId
        );

        if (
          !newState.winner &&
          newState.squares.filter(({ symbol }) => Boolean(symbol)).length ===
            newState.size * newState.size
        ) {
          newState.draw = true;
        }

        if (!newState.winner) {
          newState.currentPlayer = newState.currentPlayer === 0 ? 1 : 0;
        }

        if (newState.winner || newState.draw) {
          newState.started = false;
        }
      }

      return newState;
    });
  }, []);

  const { winner, draw, currentPlayer } = state;

  useEffect(() => {
    if (winner || draw) {
      updateStats(winner ? currentPlayer : null);
    }
  }, [winner, draw, currentPlayer, updateStats]);

  return (
    <BoardActionsContext.Provider
      value={{
        startGame,
        makeMove,
      }}
    >
      <BoardContext.Provider value={state}>{children}</BoardContext.Provider>
    </BoardActionsContext.Provider>
  );
};

export function useBoardContext() {
  return useContext(BoardContext);
}

export function useBoardActionsContext() {
  return useContext(BoardActionsContext);
}
