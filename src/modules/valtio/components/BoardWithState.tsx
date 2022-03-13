import React from "react";

import Board from "components/Board";
import { useBoardSnapshot, makeMove } from "modules/valtio/store/boardStore";

const BoardWithState = () => {
  const snap = useBoardSnapshot();

  return <Board size={snap.size} squares={snap.squares} makeMove={makeMove} />;
};

export default BoardWithState;
