import React from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import Board from "components/Board";
import { useStores } from "modules/mobx/store";

const BoardWithState = observer(() => {
  const { boardStore } = useStores();

  return (
    <Board
      size={boardStore.size}
      squares={toJS(boardStore.squares)}
      makeMove={boardStore.makeMove}
    />
  );
});

export default BoardWithState;
