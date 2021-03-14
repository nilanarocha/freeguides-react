import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Heading, Stack, Text, Button, Center, Flex, Icon } from '@chakra-ui/react';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const trash = <FontAwesomeIcon icon={faTrashAlt} />;

function Card() {
  const { pathname } = useLocation();
  return (
    <Container boxShadow="1px" borderRadius="9px">
      <Stack display="block" mt="30px" mb="40px">
        <Heading as="h2" mt="15px" color="#676767">
          Paying
        </Heading>
        <Text as="h4" color="#676767" fontSize="12px">
          for explorers
        </Text>
        <Text as="h4" color="#676767" fontSize="15px">
          NAME ON CARD
        </Text>
        <Text as="h4" color="#000" fontWeight="bold" fontSize="15px">
          Daniel Wasilewsky
        </Text>
        <Text as="h4" color="#676767" fontSize="15px">
          Card ending in 3815
        </Text>
      </Stack>
      <Stack display="block" float="right">
        <Text as="h4" color="#676767" fontSize="15px">
          EXPIRES ON
        </Text>
        <Text as="h4" color="#676767" fontSize="15px">
          03/03
        </Text>
        <Icon color="#E1BFB6">{trash}</Icon>
      </Stack>

      <Center>
        <Button
          borderRadius="25px"
          color="#fff"
          borderColor="#3770C7"
          backgroundColor="#448EF9"
          as={Link}
          to="/payment"
          isActive={pathname.includes('payment')}
          colorScheme="blue"
          size="sm"
          mb="30px"
        >
          add card
        </Button>
      </Center>

      <Stack spacing={1} mr="auto" mb="30px" left="3">
        <Heading as="h2" color="#676767">
          Receiving
        </Heading>
        <Text as="h4" color="#676767" fontSize="12px">
          for guides
        </Text>
        <Text as="h4" color="#676767" fontSize="15px">
          Acc. ending in 0651
        </Text>
        <Text as="h4" color="#676767" fontSize="15px">
          Routing NUmber/BSB
        </Text>
        <Text as="h4" fontWeight="bold" color="#676767" fontSize="15px">
          73 2051
        </Text>
      </Stack>
      <Center>
        <Button
          borderRadius="25px"
          color="#fff"
          borderColor="#3770C7"
          backgroundColor="#448EF9"
          mb="15px"
        >
          update account
        </Button>
      </Center>
      <Stack>
        <Text as="h4" color="#000" mb="15px" fontSize="12px">
          You currently have $0 in upcoming payouts which will be transfered to your account within
          5 days.
        </Text>
      </Stack>
    </Container>
  );
}

export default Card;
