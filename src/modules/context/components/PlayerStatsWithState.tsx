import React from "react";

import { PlayerIdx } from "types";
import PlayerStats from "components/PlayerStats";

import { usePlayersContext } from "../store/playersContext";

interface PlayerStatsWithStateProps {
  id: PlayerIdx;
}

const PlayerStatsWithState = ({ id }: PlayerStatsWithStateProps) => {
  const players = usePlayersContext();

  return <PlayerStats stats={players.players[id]?.stats} />;
};

export default PlayerStatsWithState;
