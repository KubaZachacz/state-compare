import React from "react";
import { PlayerIdx } from "types";

import PlayerInfo from "components/PlayerInfo";

import { getPlayer, selectPlayers } from "../store/playersSlice";
import { useAppSelector, useAppDispatch } from "./../hooks";

interface PlayerInfoWithStateProps {
  id: PlayerIdx;
}

const PlayerInfoWithState = ({ id }: PlayerInfoWithStateProps) => {
  const dispatch = useAppDispatch();
  const players = useAppSelector(selectPlayers);

  return (
    <PlayerInfo
      data={players[id]?.data}
      getPlayer={() => dispatch(getPlayer(id))}
    />
  );
};

export default PlayerInfoWithState;
