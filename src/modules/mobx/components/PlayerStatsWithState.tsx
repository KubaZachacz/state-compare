import React from "react";
import { observer } from "mobx-react-lite";

import { playersStore } from "modules/mobx/store/playersStore";
import PlayerStats from "components/PlayerStats";
import { PlayerIdx } from "types";

interface PlayerStatsWithStateProps {
  id: PlayerIdx;
}

const PlayerStatsWithState = observer(({ id }: PlayerStatsWithStateProps) => {
  return (
    <PlayerStats
      stats={
        playersStore.players.length > 0
          ? playersStore.players[id]?.stats
          : undefined
      }
    />
  );
});

export default PlayerStatsWithState;
