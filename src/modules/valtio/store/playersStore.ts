import { proxy, useSnapshot } from "valtio";

import { Player, UpdateStats, GetPlayer } from "types";

import { fetchPlayers } from "utils/fetchPlayers";

export interface PlayersState {
  players: Player[];
}

export const state: PlayersState = proxy({
  players: [],
});

export const initPlayers = async () => {
  try {
    const results = await fetchPlayers(2);

    state.players = results.map((playerData, i) => ({
      data: playerData,
      stats: {
        games: 0,
        wins: 0,
      },
    }));
  } catch (error) {
    console.error(error);
  }
};

export const getPlayer: GetPlayer = async (idx) => {
  try {
    const results = await fetchPlayers(2);

    state.players[idx].data = results[0];
  } catch (error) {
    console.error(error);
  }
};

export const updateStats: UpdateStats = (winnerIdx) => {
  state.players.forEach((player, idx) => {
    player.stats = {
      games: player.stats.games + 1,
      wins: winnerIdx === idx ? player.stats.wins + 1 : player.stats.wins,
    };
  });
};

if (typeof window !== "undefined") {
  initPlayers();
}

export const usePlayersSnapshot = () => useSnapshot(state) as PlayersState;
