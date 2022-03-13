import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Stats } from "types";

interface PlayerStatsProps {
  stats?: Stats;
}

const PlayerStats = ({ stats = { wins: 0, games: 0 } }: PlayerStatsProps) => {
  const { wins, games } = stats;

  return (
    <VStack mt={8}>
      <Text>Games: {games}</Text>
      <Text>Wins: {wins}</Text>
    </VStack>
  );
};

export default PlayerStats;
