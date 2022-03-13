import React from "react";

import TurnIndicator from "components/TurnIndicator";

import { useAppSelector } from "./../hooks";
import { selectBoard } from "../store/boardSlice";

const TurnIndicatorWithState = () => {
  const { currentPlayer, currentSymbol, winner, draw } =
    useAppSelector(selectBoard);

  return (
    <TurnIndicator
      currentPlayer={currentPlayer}
      currentSymbol={currentSymbol}
      winner={winner}
      draw={draw}
    />
  );
};

export default TurnIndicatorWithState;
