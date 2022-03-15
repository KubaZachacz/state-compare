import type { NextPage } from "next";
import Page from "components/Page";
import PlayerColumn from "components/PlayerColumn";

import BoardWithState from "modules/mobx/components/BoardWithState";
import TurnIndicatorWithState from "modules/mobx/components/TurnIndicatorWithState";
import ControlsWithState from "modules/mobx/components/ControlsWithState";
import { Box, Flex } from "@chakra-ui/react";
import PlayerInfoWithState from "modules/mobx/components/PlayerInfoWithState";
import PlayerStatsWithState from "modules/mobx/components/PlayerStatsWithState";
import { StoreProvider } from "modules/mobx/store";

const Mobx: NextPage = () => {
  return (
    <StoreProvider>
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
    </StoreProvider>
  );
};

export default Mobx;
