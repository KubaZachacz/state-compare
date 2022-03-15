import React from "react";
import { observer } from "mobx-react-lite";

import TurnIndicator from "components/TurnIndicator";
import { useStores } from "modules/mobx/store";

const TurnIndicatorWithState = observer(() => {
  const { boardStore } = useStores();

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
