import { Box, Center, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { Symbol, PlayerIdx } from "types";
import SymbolIcon from "./SymbolIcon";

interface TurnIndicatorProps {
  currentPlayer: PlayerIdx;
  currentSymbol: Symbol;
  winner: Symbol | null;
  draw: boolean;
}

const TurnIndicator = ({
  currentPlayer,
  currentSymbol,
  winner,
  draw,
}: TurnIndicatorProps) => {
  return (
    <Flex justifyContent="space-between" mb={4}>
      <Center w="40px">
        {currentPlayer === 0 && <Icon as={VscTriangleLeft} />}
      </Center>
      <Box textAlign="center">
        {winner && (
          <>
            <Text fontSize="sm">Winner:</Text>
            <SymbolIcon symbol={winner} fontSize="40px" />
          </>
        )}
        {draw && (
          <>
            <Text fontSize="lg" height="67px">
              Draw
            </Text>
          </>
        )}
        {!winner && !draw && (
          <>
            <Text fontSize="sm">Move:</Text>
            <SymbolIcon symbol={currentSymbol} fontSize="40px" />
          </>
        )}
      </Box>
      <Center w="40px">
        {currentPlayer === 1 && <Icon as={VscTriangleRight} />}
      </Center>
    </Flex>
  );
};

export default TurnIndicator;
