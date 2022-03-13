import React from "react";
import PlayerInfo from "components/PlayerInfo";

import {
  getPlayer,
  usePlayersSnapshot,
} from "modules/valtio/store/playersStore";
import { PlayerIdx } from "types";

interface PlayerInfoWithStateProps {
  id: PlayerIdx;
}

const PlayerInfoWithState = ({ id }: PlayerInfoWithStateProps) => {
  const snap = usePlayersSnapshot();

  return (
    <PlayerInfo data={snap.players[id]?.data} getPlayer={() => getPlayer(id)} />
  );
};

export default PlayerInfoWithState;
