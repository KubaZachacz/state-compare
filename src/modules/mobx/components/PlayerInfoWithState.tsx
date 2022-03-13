import React from "react";
import { observer } from "mobx-react-lite";

import { playersStore } from "modules/mobx/store/playersStore";
import PlayerInfo from "components/PlayerInfo";
import { PlayerIdx } from "types";

interface PlayerInfoWithStateProps {
  id: PlayerIdx;
}

const PlayerInfoWithState = observer(({ id }: PlayerInfoWithStateProps) => {
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
