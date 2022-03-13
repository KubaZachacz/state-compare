import React from "react";

import { PlayerIdx } from "types";
import PlayerStats from "components/PlayerStats";

import { useAppSelector } from "./../hooks";
import { selectPlayers } from "../store/playersSlice";

interface PlayerStatsWithStateProps {
  id: PlayerIdx;
}

const PlayerStatsWithState = ({ id }: PlayerStatsWithStateProps) => {
  const players = useAppSelector(selectPlayers);

  return <PlayerStats stats={players[id]?.stats} />;
};

export default PlayerStatsWithState;
