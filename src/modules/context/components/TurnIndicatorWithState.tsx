import React from "react";

import TurnIndicator from "components/TurnIndicator";

import { useBoardContext } from "../store/boardContext";

const TurnIndicatorWithState = () => {
  const { currentPlayer, currentSymbol, winner, draw } = useBoardContext();

  return <TurnIndicator {...{ currentPlayer, currentSymbol, winner, draw }} />;
};

export default TurnIndicatorWithState;
