import React from 'react';

import Footer from '../components/Footer';

import Card from '../components/Card';
import Icons from '../components/Icons';
import { Box, Container, Heading, Icon, HStack, Button } from '@chakra-ui/react';
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
            <HStack my={2} mb="10px">
              <Box alignContent="center" textAlign="center" width="100%" mt="5px" mb="10px">
                <Button
                  href="#"
                  colorScheme="#000"
                  borderColor="#000"
                  variant="ghost"
                  size="md"
                  alignContent="center"
                  color="#BBBBC0"
                >
                  Activity
                </Button>
                <Button
                  href="#"
                  isActive
                  colorScheme="#000"
                  borderColor="#000"
                  variant="ghost"
                  size="md"
                >
                  Payments
                </Button>
              </Box>
            </HStack>
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
