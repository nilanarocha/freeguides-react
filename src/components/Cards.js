import React from 'react';
import { Button, Text, Badge, Center, Stack } from '@chakra-ui/react';

function Cards() {
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
          bg="#3770C7"
          _hover={{ borderColor: '#3770C7' }}
          marginTop={{ lg: '0', md: '15px', base: '15%', sm: '15px' }}
          border="0.1em solid #F0F1F3"
        >
          <Stack spacing={1} mr="auto" mb="30px" left="3">
            <Text as="h1" color="white" fontSize="30px">
              Visa Platinum
            </Text>
            <Text as="h3" color="#669BDE" fontSize="15px">
              Card ending with 4958
            </Text>
            <Text as="h3" mr="120px" color="#669BDE" fontSize="15px">
              08/22
            </Text>
            <Badge
              variant="solid"
              colorScheme="#5EAEF9"
              bg="#5EAEF9"
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

      <Center>
        <Button
          p={5}
          w={{ lg: '25%', md: '40%', base: '100%', sm: '100%' }}
          mx="auto"
          h="150px"
          rounded="15px"
          overflow="hidden"
          boxShadow="md"
          alignContent="center"
          bg="#434343"
          _hover={{ borderColor: '#434343' }}
          marginTop={{ lg: '0', md: '15px', base: '15%', sm: '15px' }}
          border="0.1em solid #F0F1F3"
        >
          <Stack spacing={1} mr="auto" mb="30px" left="2">
            <Text as="h2" color="white" fontSize="30px">
              Mastercard
            </Text>
            <Text as="h3" color="#696969" fontSize="15px">
              Card ending with 4958
            </Text>
            <Text as="h3" mr="120px" color="#696969" fontSize="15px">
              08/22
            </Text>
            <Badge
              variant="solid"
              colorScheme="#5EAEF9"
              bg="#525252"
              color="white"
              ml="1px"
              mar="15px"
              mt="10px"
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
