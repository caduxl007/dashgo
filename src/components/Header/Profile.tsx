import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Eduardo Silva</Text>
        <Text color="gray.300" fontSize="small">
          desenvolvimento@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Eduardo Silva"
        src="https://avatars.githubusercontent.com/u/69374299?v=4"
      />
    </Flex>
  );
}
