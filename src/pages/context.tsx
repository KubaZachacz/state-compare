import type { NextPage } from "next";

import { Flex, Box } from "@chakra-ui/react";

import Page from "components/Page";
import PlayerColumn from "components/PlayerColumn";

import BoardWithState from "modules/context/components/BoardWithState";
import TurnIndicatorWithState from "modules/context/components/TurnIndicatorWithState";
import ControlsWithState from "modules/context/components/ControlsWithState";

import PlayerInfoWithState from "modules/context/components/PlayerInfoWithState";
import PlayerStatsWithState from "modules/context/components/PlayerStatsWithState";

import { BoardProvider } from "modules/context/store/boardContext";
import { PlayersProvider } from "modules/context/store/playersContext";

const Redux: NextPage = () => {
  return (
    <PlayersProvider>
      <BoardProvider>
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
      </BoardProvider>
    </PlayersProvider>
  );
};

export default Redux;
