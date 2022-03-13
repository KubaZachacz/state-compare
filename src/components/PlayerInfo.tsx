import { Avatar, Box, HStack, IconButton, Text, Icon } from "@chakra-ui/react";
import { BiRefresh } from "react-icons/bi";
import React from "react";
import { PlayerData } from "types";

interface PlayerInfoProps {
  getPlayer: () => void;
  data?: PlayerData;
}

const PlayerInfo = ({ data, getPlayer }: PlayerInfoProps) => {
  if (!data) {
    return null;
  }

  const { name, email, picture } = data;

  return (
    <Box>
      <HStack>
        <Avatar name={name.first} src={picture.large} />
        <Box>
          <Text fontSize="xl" fontWeight={500}>
            {name.first}{" "}
            <IconButton
              aria-label="refresh"
              size="sm"
              variant="ghost"
              icon={<Icon as={BiRefresh} />}
              onClick={() => getPlayer()}
            />
          </Text>
          <Text fontSize="xs" color="gray.500">
            {email}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default PlayerInfo;
