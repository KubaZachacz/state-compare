import React from "react";
import { observer } from "mobx-react-lite";

import { boardStore } from "modules/mobx/store/boardStore";
import TurnIndicator from "components/TurnIndicator";

const TurnIndicatorWithState = observer(() => {
  return (
    <TurnIndicator
      currentPlayer={boardStore.currentPlayer}
      currentSymbol={boardStore.currentSymbol}
      winner={boardStore.winner}
      draw={boardStore.draw}
    />
  );
});

export default TurnIndicatorWithState;
