import React from "react";
import { AspectRatio, Box, Container, SimpleGrid } from "@chakra-ui/react";
import { MakeMove, Square } from "types";

import SymbolIcon from "./SymbolIcon";

interface BoardProps {
  size: number;
  squares: Square[];
  makeMove: MakeMove;
}

const Board = ({ size, squares, makeMove }: BoardProps) => {
  return (
    <Box maxW="600px" overflow="hidden" mx="auto">
      <SimpleGrid columns={size} m={-2}>
        {squares.map(({ symbol }, idx) => (
          <AspectRatio key={`square.${idx}`} ratio={1}>
            <Box
              role="button"
              bg="white"
              fontSize="xl"
              fontWeight={700}
              borderWidth={2}
              pointerEvents={Boolean(symbol) ? "none" : "initial"}
              onClick={() => makeMove(idx)}
            >
              {symbol && <SymbolIcon symbol={symbol} boxSize="60%" />}
            </Box>
          </AspectRatio>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Board;
