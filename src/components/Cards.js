import React from 'react';
import { Button, Text, Badge, Center, Stack } from '@chakra-ui/react';

function Cards({ type }) {
  const bgColors = {
    VisaPlatinum: '#3770C7',
    Mastercard: '#434343',
  };

  const color = {
    VisaPlatinum: '#669BDE',
    Mastercard: '#696969',
  };

  const colorScheme = {
    VisaPlatinum: '#5EAEF9',
    Mastercard: '#525252',
  };
  return (
    <>
      <Center>
        <Button
          p={5}
          w={{ lg: '25%', md: '40%', base: '100%', sm: '100%' }}
          mx="auto"
          mt="30px"
          h="150px"
          rounded="15px"
          overflow="hidden"
          boxShadow="md"
          alignContent="center"
          bg={bgColors[type]}
          _hover={{ borderColor: bgColors[type] }}
          marginTop={{ lg: '0', md: '15px', base: '15%', sm: '15px' }}
          border="0.1em solid #F0F1F3"
        >
          <Stack spacing={1} mr="auto" mb="30px" left="3">
            <Text as="h1" color="white" fontSize="30px">
              {[type]}
            </Text>
            <Text as="h3" color={color[type]} fontSize="15px">
              Card ending with 4958
            </Text>
            <Text as="h3" mr="120px" color={color[type]} fontSize="15px">
              08/22
            </Text>
            <Badge
              variant="solid"
              colorScheme={colorScheme[type]}
              bg={colorScheme[type]}
              color="white"
              marginLeft="1px"
              marginRight="15px"
              marginTop="10px"
              fontSize="0.75em"
              borderRadius="10px"
              position="absolute"
              bottom="5"
              left="5"
              justifyContent="right"
            >
              For Payment
            </Badge>
          </Stack>
        </Button>
      </Center>
    </>
  );
}

export default Cards;
