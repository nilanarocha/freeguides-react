import React from 'react';
import NavBar from '../components/NavBar';

import Footer from '../components/Footer';

import Card from '../components/Card';
import Icons from '../components/Icons';
import { Box, Container, Heading, Icon } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const arrow = <FontAwesomeIcon icon={faArrowLeft} />;

function AddCard() {
  return (
    <ChakraProvider>
      <Box>
        <Container>
          <Box>
            <Heading as="h3" size="md" mt="30px" color="#BBBBC0" textAlign="center">
              FINANCES
            </Heading>

            <Icon fontSize="md" ml="30px" fontWeight="lg" color="#7BAEDE">
              {arrow}
            </Icon>
            <NavBar />
            <Box maxHeight="100%" bg="#FFFFFF" boxShadow="2px gray.500" borderRadius="10px">
              <Card />
            </Box>
            <Icons />
            <Footer />
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default AddCard;
