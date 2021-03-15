import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Center,
  Icon,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const trash = <FontAwesomeIcon icon={faTrashAlt} />;

function Card() {
  const { pathname } = useLocation();
  return (
    <Container boxShadow="2px gray.500" borderRadius="9px">
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem mb="10px">
          <Heading as="h2" mt="15px" color="#676767">
            Paying
          </Heading>
          <Text as="h4" color="#676767" fontSize="11px">
            for explorers
          </Text>
          <Text as="h4" color="#676767" fontSize="14px">
            NAME ON CARD
          </Text>
          <Text as="h4" color="#000" fontWeight="bold" fontSize="14px">
            Daniel Wasilewsky
          </Text>
          <Text as="h4" color="#676767" fontSize="14px">
            Card ending in <Text fontWeight="bold">3815</Text>
          </Text>
        </GridItem>
        <GridItem mt="90px" right="10" ml="60px" alignContent="right">
          <Text as="h4" color="#676767" fontSize="14px">
            EXPIRES ON
          </Text>
          <Text as="h4" color="#676767" fontSize="14px">
            03/03
          </Text>
          <Icon color="#E1BFB6">{trash}</Icon>
        </GridItem>
      </Grid>
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
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem mb="10px">
          <Stack mr="auto" mb="30px" left="3">
            <Heading as="h2" mt="15px" color="#676767">
              Receiving
            </Heading>
            <Text as="h4" color="#676767" fontSize="11px">
              for guides
            </Text>
            <Text as="h4" color="#676767" fontSize="14px">
              Acc. ending in <Text fontWeight="bold">0651</Text>
            </Text>
            <Text as="h4" color="#676767" fontSize="14px">
              Routing NUmber/BSB
            </Text>
            <Text as="h4" fontWeight="bold" color="#676767" fontSize="14px">
              73 2051
            </Text>
          </Stack>
        </GridItem>
      </Grid>
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
