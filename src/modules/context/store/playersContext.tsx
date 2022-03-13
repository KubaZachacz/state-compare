import {
  FC,
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";
import { cloneDeep } from "lodash";

import { GetPlayer, Player, UpdateStats } from "types";
import { fetchPlayers } from "utils/fetchPlayers";

interface PlayersState {
  players: Player[];
}

const initialState: PlayersState = {
  players: [],
};

const PlayersContext = createContext(cloneDeep(initialState));

interface PlayersActions {
  getPlayer: GetPlayer;
  updateStats: UpdateStats;
}

const PlayersActionsContext = createContext<PlayersActions>({
  getPlayer: () => {},
  updateStats: () => {},
});

export const PlayersProvider: FC = ({ children }) => {
  const [state, setState] = useState(cloneDeep(initialState));

  const initPlayers = useCallback(async () => {
    try {
      const results = await fetchPlayers(2);

      setState((state) => {
        const newState = cloneDeep(state);

        newState.players = results.map((playerData, i) => ({
          data: playerData,
          stats: {
            games: 0,
            wins: 0,
          },
        }));

        return newState;
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getPlayer = useCallback<GetPlayer>(async (idx) => {
    try {
      const results = await fetchPlayers(1);

      setState((state) => {
        const newState = cloneDeep(state);

        newState.players[idx].data = results[0];

        return newState;
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const updateStats = useCallback<UpdateStats>((winnerIdx) => {
    setState((state) => {
      const newState = cloneDeep(state);

      newState.players.forEach((player, idx) => {
        player.stats = {
          games: player.stats.games + 1,
          wins: winnerIdx === idx ? player.stats.wins + 1 : player.stats.wins,
        };
      });

      return newState;
    });
  }, []);

  useEffect(() => {
    initPlayers();
  }, [initPlayers]);

  return (
    <PlayersActionsContext.Provider value={{ getPlayer, updateStats }}>
      <PlayersContext.Provider value={state}>
        {children}
      </PlayersContext.Provider>
    </PlayersActionsContext.Provider>
  );
};

export function usePlayersContext() {
  return useContext(PlayersContext);
}

export function usePlayersActionsContext() {
  return useContext(PlayersActionsContext);
}
