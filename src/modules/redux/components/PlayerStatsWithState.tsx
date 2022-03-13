import React from "react";

import { PlayerIdx } from "types";
import PlayerStats from "components/PlayerStats";

import { useAppSelector } from "./../hooks";
import { selectPlayerStats } from "../store/playersSlice";

interface PlayerStatsWithStateProps {
  id: PlayerIdx;
}

const PlayerStatsWithState = ({ id }: PlayerStatsWithStateProps) => {
  const stats = useAppSelector(selectPlayerStats(id));

  return <PlayerStats stats={stats} />;
};

export default PlayerStatsWithState;
