import React from 'react';
import { Button, Box } from '@chakra-ui/react';

function ButtonAddCard() {
  return (
    <Box>
      <Button
        size="md"
        height="50px"
        w={{ lg: '14%', md: '40%', base: '60%', sm: '100%' }}
        border="2px"
        borderRadius="25px"
        borderColor="#468EF7"
        backgroundColor="#468EF7"
        color="#fff"
        position="fixed"
        alignItems="center"
        bottom="10%"
        ml="25%"
        mr="25%"
      >
        Add Card
      </Button>
    </Box>
  );
}

export default ButtonAddCard;
