import React from "react";
import { PlayerIdx } from "types";

import PlayerInfo from "components/PlayerInfo";

import {
  getPlayer,
  selectPlayerData,
} from "../store/playersSlice";
import { useAppSelector, useAppDispatch } from "./../hooks";

interface PlayerInfoWithStateProps {
  id: PlayerIdx;
}

const PlayerInfoWithState = ({ id }: PlayerInfoWithStateProps) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectPlayerData(id));

  return (
    <PlayerInfo
      data={data}
      getPlayer={() => dispatch(getPlayer(id))}
    />
  );
};

export default PlayerInfoWithState;
