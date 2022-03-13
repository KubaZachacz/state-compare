import React from "react";

import PlayerStats from "components/PlayerStats";
import { usePlayersSnapshot } from "modules/valtio/store/playersStore";
import { PlayerIdx } from "types";

interface PlayerStatsWithStateProps {
  id: PlayerIdx;
}

const PlayerStatsWithState = ({ id }: PlayerStatsWithStateProps) => {
  const snap = usePlayersSnapshot();

  return <PlayerStats stats={snap.players[id]?.stats} />;
};

export default PlayerStatsWithState;
