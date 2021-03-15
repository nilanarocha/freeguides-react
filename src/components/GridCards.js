import React from 'react';
import { Flex } from '@chakra-ui/react';

function GridCards({ children }) {
  return (
    <Flex
      justifyContent="space-between"
      borderRadius="lg"
      paddingX={5}
      paddingY={6}
      height="auto"
      direction="column"
      wrap="wrap"
      mt="10px"
    >
      {children}
    </Flex>
  );
}

export default GridCards;
