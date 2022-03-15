import React from "react";
import { observer } from "mobx-react-lite";

import PlayerInfo from "components/PlayerInfo";
import { PlayerIdx } from "types";
import { useStores } from "modules/mobx/store";

interface PlayerInfoWithStateProps {
  id: PlayerIdx;
}

const PlayerInfoWithState = observer(({ id }: PlayerInfoWithStateProps) => {
  const { playersStore } = useStores();

  return (
    <PlayerInfo
      data={
        playersStore.players.length > 0
          ? playersStore.players[id]?.data
          : undefined
      }
      getPlayer={() => playersStore.getPlayer(id)}
    />
  );
});

export default PlayerInfoWithState;
