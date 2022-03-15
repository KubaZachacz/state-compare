import React from "react";
import { observer } from "mobx-react-lite";
import Controls from "components/Controls";
import { useStores } from "modules/mobx/store";

const ControlsWithState = observer(() => {
  const { boardStore } = useStores();

  return (
    <Controls onStart={boardStore.startGame} isStarted={boardStore.started} />
  );
});

export default ControlsWithState;
