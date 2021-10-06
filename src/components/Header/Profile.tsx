import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (

    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Bernardo Bevilaqua</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            bernardo.bfg@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Bernrado Bevilaqua"
        src="https://github.com/bernardobfg.png"
      />
    </Flex>

  )
}