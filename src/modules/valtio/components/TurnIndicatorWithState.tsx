import React from "react";

import TurnIndicator from "components/TurnIndicator";
import { useBoardSnapshot } from "modules/valtio/store/boardStore";

const TurnIndicatorWithState = () => {
  const snap = useBoardSnapshot();

  return (
    <TurnIndicator
      currentPlayer={snap.currentPlayer}
      currentSymbol={snap.currentSymbol}
      winner={snap.winner}
      draw={snap.draw}
    />
  );
};

export default TurnIndicatorWithState;
