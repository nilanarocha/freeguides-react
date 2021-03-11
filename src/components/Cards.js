import React from 'react';
import { Button, Text, Badge } from '@chakra-ui/react';

function Cards() {
  return (
    <>
      <Button
        p={5}
        w={{ lg: '17%', md: '40%', base: '100%', sm: '100%' }}
        mx="auto"
        h="100px"
        rounded="10px"
        overflow="hidden"
        boxShadow="sm"
        marginRight="30px"
        marginTop={{ lg: '0', md: '15px', base: '15%', sm: '15px' }}
        border="0.1em solid #F0F1F3"
      >
        <Text as="h2">Visa Platinum</Text>
        <Badge
          variant="outline"
          colorScheme="blue"
          color="white"
          marginLeft="1px"
          marginRight="15px"
          marginTop="10px"
          fontSize="0.75em"
          position="absolute"
          top="2"
          right="2"
          justifyContent="right"
        ></Badge>
        <Text
          as="h4"
          color="gray.600"
          fontSize="sm"
          fontWeight="md"
          justifyContent="right"
          right="4"
          marginTop="20px"
          marginRight="15px"
          position="absolute"
        ></Text>
      </Button>
    </>
  );
}

export default Cards;
