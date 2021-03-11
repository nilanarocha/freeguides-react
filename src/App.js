import React from 'react';
import NavBar from './components/NavBar';
import MenuBar from './components/MenuBar';
import ButtonAddCard from './components/ButtonAddCard';
import Footer from './components/Footer';
import { Box, Container, Heading, Divider, Icon } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <ChakraProvider>
      <Container maxWidth="100%" maxHeight="100%">
        <Box>
          <Box>
            <MenuBar></MenuBar>
            <Icon fontSize="md" fontWeight="lg" mR="auto" marginLeft="5px" color="#E5E8ED">
              <FontAwesomeIcon icon={['fas', 'timesCircle']} />
            </Icon>
            <Heading as="h3" size="md" mt="30px" color="#BBBBC0" textAlign="center">
              FINANCES
            </Heading>
            <Divider mt="60px" />
            <NavBar></NavBar>
            <Divider mt="60px" />
            <ButtonAddCard />
            <Footer />
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
