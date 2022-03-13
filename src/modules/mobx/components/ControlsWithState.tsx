import React from "react";
import { observer } from "mobx-react-lite";

import { boardStore } from "modules/mobx/store/boardStore";
import Controls from "components/Controls";

const ControlsWithState = observer(() => {
  return (
    <Controls onStart={boardStore.startGame} isStarted={boardStore.started} />
  );
});

export default ControlsWithState;
