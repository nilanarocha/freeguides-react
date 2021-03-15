import React, { useState, useContext } from 'react';

import Cards from '../components/Cards';
import GridCards from '../components/GridCards';
import ButtonAddCard from '../components/ButtonAddCard';

import AddCardModal from '../modal/AddCardModal';
import CardsContext from '../context/cards/CardsContext';

import Footer from '../components/Footer';
import {
  Box,
  Container,
  Heading,
  useDisclosure,
  HStack,
  Button,
  CloseButton,
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

function Payment() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState(null);
  const [cardType, setCardType] = useState(null);

  const { cards, addCard } = useContext(CardsContext);

  const addNewCard = (e) => {
    e.preventDefault();
    try {
      if (cardType) {
        setError('Please enter a card Type.');
      }

      if (cardType) {
        addCard({
          type: cards,
          cardEnding: '4958',
          valiTo: '08/22',
          id: cards,
        });
        setCardType(null);
        setError(null);
        onClose();
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong');
    }
  };

  return (
    <ChakraProvider>
      <Container maxWidth="100%" maxHeight="100%">
        <Box>
          <CloseButton size="sm" fontWeight="lg" mr="auto" ml="60px" mt="30px" />
          <Heading as="h3" size="md" mb="10px" color="#BBBBC0" textAlign="center">
            FINANCES
          </Heading>
          <HStack my={2} mb="30px">
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
                Statistics
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
          <GridCards>
            {cards && cards.map((card) => <Cards key={card.id} type={card.type} />)}
          </GridCards>
          <ButtonAddCard onClick={onOpen}></ButtonAddCard>
          <Footer />
          <AddCardModal
            isOpen={isOpen}
            onClose={() => {
              onClose();
              setError(null);
            }}
            setCardType={setCardType}
            addNewCard={addNewCard}
            error={error}
          />
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default Payment;
