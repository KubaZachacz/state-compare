import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import { StartGame } from "types";
import NumberControl from "./NumberControl";
import { DEFAULT_POINTS, DEFAULT_SIZE } from "utils/constants";

interface ControlsProps {
  onStart: StartGame;
  isStarted: boolean;
}

const Controls = ({ onStart, isStarted }: ControlsProps) => {
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [points, setPoints] = useState(DEFAULT_POINTS);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="flex-end"
      maxW="600px"
      mx="auto"
      mt={8}
    >
      <HStack>
        <FormControl>
          <FormLabel>Size</FormLabel>
          <NumberControl
            width="100px"
            placeholder="Set size"
            min={3}
            max={15}
            value={size}
            onChange={(_, value) => setSize(value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Points</FormLabel>
          <NumberControl
            width="100px"
            placeholder="Set points"
            min={3}
            max={6}
            value={points}
            onChange={(_, value) => setPoints(value)}
          />
        </FormControl>
      </HStack>
      <Box>
        <Button onClick={() => onStart(size, points)}>
          {isStarted ? "Restart" : "Start"}
        </Button>
      </Box>
    </Flex>
  );
};

export default Controls;
