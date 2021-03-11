import React from 'react';
import { Container, Heading, Stack, Text, Button, Center } from '@chakra-ui/react';

function Card() {
  return (
    <Container bg="white">
      <Stack spacing={0.5} mr="auto" mb="30px" left="3">
        <Heading as="h2" color="#676767">
          Paying
        </Heading>
        <Text as="h4" color="#676767" fontSize="11px">
          for explorers
        </Text>
        <Text as="h4" color="#E0E0E0" fontSize="15px">
          NAME ON CARD
        </Text>
        <Text as="h4" color="#000" fontSize="15px">
          Daniel Wasilewsky
        </Text>
        <Text as="h4" color="#676767" fontSize="15px">
          Card ending in 3815
        </Text>
      </Stack>
      <Center>
        <Button>Add Card</Button>
      </Center>

      <Stack spacing={1} mr="auto" mb="30px" left="3">
        <Heading as="h2" color="#676767">
          Receiving
        </Heading>
        <Text as="h4" color="#676767" fontSize="10px">
          for guides
        </Text>
        <Text as="h4" color="#669BDE" fontSize="15px">
          Acc. ending in 0651
        </Text>
        <Text as="h4" color="#669BDE" fontSize="15px">
          Routing NUmber/BSB
        </Text>
        <Text as="h4" color="#669BDE" fontSize="15px">
          73 2051
        </Text>
      </Stack>
      <Center>
        <Button>update account</Button>
      </Center>
      <Stack>
        <Text as="h4" color="#000" fontSize="12px">
          You currently have $0 in upcoming payouts which will be transfered to your account within
          5 days.
        </Text>
      </Stack>
    </Container>
  );
}

export default Card;
