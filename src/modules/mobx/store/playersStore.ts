import { makeAutoObservable, runInAction } from "mobx";
import { Player, UpdateStats, GetPlayer } from "types";
import { fetchPlayers } from "utils/fetchPlayers";

class Players {
  players: Player[] = [];

  constructor() {
    makeAutoObservable(this);

    if (typeof window !== "undefined") {
      this.initPlayers();
    }
  }

  initPlayers = async () => {
    try {
      const results = await fetchPlayers(2);

      runInAction(() => {
        this.players = results.map((playerData, i) => ({
          data: playerData,
          stats: {
            games: 0,
            wins: 0,
          },
        }));
      });
    } catch (error) {
      console.error(error);
    }
  };

  getPlayer: GetPlayer = async (idx) => {
    try {
      const results = await fetchPlayers(1);

      runInAction(() => {
        this.players[idx].data = results[0];
      });
    } catch (error) {
      console.error(error);
    }
  };

  updateStats: UpdateStats = (winnerIdx) => {
    this.players.forEach((player, idx) => {
      player.stats = {
        games: player.stats.games + 1,
        wins: winnerIdx === idx ? player.stats.wins + 1 : player.stats.wins,
      };
    });
  };
}

export const playersStore = new Players();
