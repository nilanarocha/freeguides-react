import React, { useState, useContext } from 'react';

import Cards from '../components/Cards';
import GridCards from '../components/GridCards';
import ButtonAddCard from '../components/ButtonAddCard';

import AddCardModal from '../modals/AddCardModal';
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

  const { cards, setCards, deleteCard } = useContext(CardsContext);

  const onDeleteCard = (e, card) => {
    e.preventDefault();
    deleteCard(card);
  };

  const addNewCard = (e, { cardType }) => {
    e.preventDefault();
    try {
      if (!cardType) {
        throw new Error('Please enter a card Type.');
      }

      setCards([
        ...cards,
        {
          type: 'cardType',
          id: cards.length + 1,
        },
      ]);
      setError(null);
      onClose();
    } catch (error) {
      console.error(error.message);
      setError(error.message);
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
            {cards &&
              cards.map((card) => {
                return (
                  <Cards
                    key={`${card.type}-${card.id}`}
                    id={card.id}
                    type={card.type}
                    onDelete={onDeleteCard}
                  />
                );
              })}
          </GridCards>
          <ButtonAddCard onClick={onOpen}></ButtonAddCard>
          <Footer />
          <AddCardModal
            isOpen={isOpen}
            onClose={() => {
              onClose();
              setError(null);
            }}
            addNewCard={addNewCard}
            error={error}
          />
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default Payment;
