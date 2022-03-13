import React from "react";
import { PlayerIdx } from "types";

import PlayerInfo from "components/PlayerInfo";
import {
  usePlayersContext,
  usePlayersActionsContext,
} from "../store/playersContext";

interface PlayerInfoWithStateProps {
  id: PlayerIdx;
}

const PlayerInfoWithState = ({ id }: PlayerInfoWithStateProps) => {
  const { players } = usePlayersContext();
  const { getPlayer } = usePlayersActionsContext();

  return (
    <PlayerInfo data={players[id]?.data} getPlayer={() => getPlayer(id)} />
  );
};

export default PlayerInfoWithState;
