import React from 'react';
import { HStack, Button, Box } from '@chakra-ui/react';

function Navbar() {
  return (
    <HStack my={2}>
      <Box
        position="fixed"
        alignContent="center"
        textAlign="center"
        width="100%"
        mt="30px"
        mb="30px"
      >
        <Button
          href="#"
          colorScheme="#000"
          borderColor="#000"
          variant="ghost"
          size="md"
          mt={35}
          alignContent="center"
        >
          Statistics
        </Button>
        <Button
          href="#"
          isActive
          colorScheme="#000"
          borderColor="#000"
          variant="ghost"
          size="md"
          mt={35}
        >
          Payments
        </Button>
      </Box>
    </HStack>
  );
}

export default Navbar;
