import type { NextPage } from "next";

import { Provider } from "react-redux";
import { Flex, Box } from "@chakra-ui/react";

import Page from "components/Page";
import PlayerColumn from "components/PlayerColumn";

import { store } from "modules/redux/store";
import BoardWithState from "modules/redux/components/BoardWithState";
import TurnIndicatorWithState from "modules/redux/components/TurnIndicatorWithState";
import ControlsWithState from "modules/redux/components/ControlsWithState";

import PlayerInfoWithState from "modules/redux/components/PlayerInfoWithState";
import PlayerStatsWithState from "modules/redux/components/PlayerStatsWithState";
import InitPlayers from "modules/redux/components/InitPlayers";

const Redux: NextPage = () => {
  return (
    <Provider store={store}>
      <InitPlayers />
      <Page>
        <Flex gap={4}>
          <PlayerColumn>
            <PlayerInfoWithState id={0} />
            <PlayerStatsWithState id={0} />
          </PlayerColumn>
          <Box flex={1}>
            <TurnIndicatorWithState />
            <BoardWithState />
            <ControlsWithState />
          </Box>
          <PlayerColumn>
            <PlayerInfoWithState id={1} />
            <PlayerStatsWithState id={1} />
          </PlayerColumn>
        </Flex>
      </Page>
    </Provider>
  );
};

export default Redux;
