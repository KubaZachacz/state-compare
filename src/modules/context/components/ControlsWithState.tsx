import React from "react";
import Controls from "components/Controls";

import { useBoardContext, useBoardActionsContext } from "../store/boardContext";

const ControlsWithState = () => {
  const { started } = useBoardContext();
  const { startGame } = useBoardActionsContext();

  return <Controls onStart={startGame} isStarted={started} />;
};

export default ControlsWithState;
