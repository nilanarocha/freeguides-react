import React from 'react';
import NavBar from '../components/NavBar';

import Footer from '../components/Footer';

import Card from '../components/Card';
import Icons from '../components/Icons';
import { Box, Container, Heading, Icon } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const close = <FontAwesomeIcon icon={faTimesCircle} />;

function AddCard() {
  return (
    <ChakraProvider>
      <Box bg="#F0F0F0">
        <Container maxWidth="100%" maxHeight="100%" bg="white" boxShadow="2px">
          <Box>
            <Icon fontSize="md" fontWeight="lg" mr="auto" ml="60px" mt="30px" color="#E5E8ED">
              {close}
            </Icon>
            <Heading as="h3" size="md" mb="10px" color="#BBBBC0" textAlign="center">
              FINANCES
            </Heading>
            <NavBar />
            <Card />
            <Icons />
            <Footer />
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default AddCard;
