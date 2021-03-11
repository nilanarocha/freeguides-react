import React from 'react';
import NavBar from './components/NavBar';
import MenuBar from './components/MenuBar';
import Cards from './components/Cards';
import ButtonAddCard from './components/ButtonAddCard';
import Footer from './components/Footer';
import { Box, Container, Heading, Divider, Icon } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const closeIcon = <FontAwesomeIcon icon={faTimesCircle} />;

function CurrentPage() {
  return (
    <ChakraProvider>
      <Container maxWidth="100%" maxHeight="100%">
        <Box>
          <Box>
            <MenuBar></MenuBar>
            <Icon mr="auto" ml="70px" fontSize="25px" mt="30px" color="#BBBBC0" size="lg">
              {closeIcon}
            </Icon>
            <Heading as="h3" size="md" mt="5px" color="#BBBBC0" textAlign="center">
              FINANCES
            </Heading>
            <Divider mt="50px" />
            <NavBar></NavBar>
            <Divider mt="60px" />
            <Footer />
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default CurrentPag;
