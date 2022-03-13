import type { NextPage } from "next";
import { Flex, Box } from "@chakra-ui/react";

import Page from "components/Page";
import PlayerColumn from "components/PlayerColumn";

import BoardWithState from "modules/valtio/components/BoardWithState";
import TurnIndicatorWithState from "modules/valtio/components/TurnIndicatorWithState";
import ControlsWithState from "modules/valtio/components/ControlsWithState";
import PlayerInfoWithState from "modules/valtio/components/PlayerInfoWithState";
import PlayerStatsWithState from "modules/valtio/components/PlayerStatsWithState";

const Valtio: NextPage = () => {
  return (
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
  );
};

export default Valtio;
