import React from 'react';
import { Button, Center } from '@chakra-ui/react';

function ButtonAddCard({ onClick }) {
  return (
    <>
      <Center>
        <Button
          onClick={(e) => {
            onClick(e);
          }}
          size="md"
          height="50px"
          w={{ lg: '17%', md: '40%', base: '60%', sm: '100%' }}
          border="2px"
          borderRadius="25px"
          borderColor="#3770C7"
          backgroundColor="#3770C7"
          color="#fff"
          position="fixed"
          alignItems="center"
          bottom="6%"
        >
          Add Card
        </Button>
      </Center>
    </>
  );
}

export default ButtonAddCard;
