import React from "react";

import Controls from "components/Controls";
import { startGame, useBoardSnapshot } from "modules/valtio/store/boardStore";

const ControlsWithState = () => {
  const snap = useBoardSnapshot();

  return <Controls onStart={startGame} isStarted={snap.started} />;
};

export default ControlsWithState;
