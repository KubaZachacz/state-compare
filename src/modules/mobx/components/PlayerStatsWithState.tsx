import React from "react";
import { observer } from "mobx-react-lite";

import PlayerStats from "components/PlayerStats";
import { PlayerIdx } from "types";
import { useStores } from "modules/mobx/store";

interface PlayerStatsWithStateProps {
  id: PlayerIdx;
}

const PlayerStatsWithState = observer(({ id }: PlayerStatsWithStateProps) => {
  const { playersStore } = useStores();

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
