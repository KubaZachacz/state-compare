import React from "react";
import Board from "components/Board";

import { useBoardContext, useBoardActionsContext } from "../store/boardContext";

const BoardWithState = () => {
  const { size, squares } = useBoardContext();
  const { makeMove } = useBoardActionsContext();

  return <Board size={size} squares={squares} makeMove={makeMove} />;
};

export default BoardWithState;
