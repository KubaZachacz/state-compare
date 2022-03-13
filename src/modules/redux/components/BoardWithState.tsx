import React from "react";
import Board from "components/Board";

import { makeMove, selectBoard } from "../store/boardSlice";
import { useAppSelector, useAppDispatch } from "./../hooks";

const BoardWithState = () => {
  const { size, squares } = useAppSelector(selectBoard);
  const dispatch = useAppDispatch();
  const onMakeMove = (squareId: number) => dispatch(makeMove({ squareId }));

  return <Board size={size} squares={squares} makeMove={onMakeMove} />;
};

export default BoardWithState;
