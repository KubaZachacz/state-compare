import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Player, PlayerIdx } from "types";
import { fetchPlayers } from "utils/fetchPlayers";

import type { RootState } from ".";

interface PlayersState {
  players: Player[];
}

const initialState: PlayersState = {
  players: [],
};

export const initPlayers = createAsyncThunk("players/initPlayers", async () => {
  return await fetchPlayers(2);
});

export const getPlayer = createAsyncThunk(
  "players/getPlayer",
  async (idx: PlayerIdx) => {
    const data = await fetchPlayers(1);
    return {
      data: data[0],
      idx,
    };
  }
);

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer

    updateStats: (state, action: PayloadAction<PlayerIdx | null>) => {
      const winnerIdx = action.payload;

      state.players.forEach((player, idx) => {
        player.stats = {
          games: player.stats.games + 1,
          wins: winnerIdx === idx ? player.stats.wins + 1 : player.stats.wins,
        };
      });
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(initPlayers.fulfilled, (state, action) => {
      state.players = action.payload.map((playerData, i) => ({
        data: playerData,
        stats: {
          games: 0,
          wins: 0,
        },
      }));
    });

    builder.addCase(getPlayer.fulfilled, (state, action) => {
      const { idx, data } = action.payload;

      state.players[idx].data = data;
    });
  },
});

export const { updateStats } = playersSlice.actions;

export const selectPlayers = (state: RootState) => state.players.players;

export default playersSlice.reducer;
