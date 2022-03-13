import React from "react";
import Controls from "components/Controls";

import { useAppSelector, useAppDispatch } from "./../hooks";
import { startGame } from "../store/boardSlice";

const ControlsWithState = () => {
  const dispatch = useAppDispatch();
  const started = useAppSelector((state) => state.board.started);

  const onStart = (size: number, points: number) =>
    dispatch(startGame({ size, points }));

  return <Controls onStart={onStart} isStarted={started} />;
};

export default ControlsWithState;
