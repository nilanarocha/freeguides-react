import React from 'react';
import { Button, Box } from '@chakra-ui/react';

function ButtonAddCard() {
  return (
    <Box>
      <Button
        size="md"
        height="50px"
        w={{ lg: '10%', md: '30%', base: '80%', sm: '100%' }}
        border="2px"
        borderRadius="25px"
        borderColor="#468EF7"
        backgroundColor="#468EF7"
        color="#fff"
        position="fixed"
        alignItems="center"
        bottom="10%"
        left="0"
        right="0"
        ml={30}
      >
        Add Card
      </Button>
    </Box>
  );
}

export default ButtonAddCard;
