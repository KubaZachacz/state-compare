import React from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import Board from "components/Board";
import { boardStore } from "modules/mobx/store/boardStore";

const BoardWithState = observer(() => {
  return (
    <Board
      size={boardStore.size}
      squares={toJS(boardStore.squares)}
      makeMove={boardStore.makeMove}
    />
  );
});

export default BoardWithState;
