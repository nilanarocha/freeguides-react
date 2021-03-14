import React, { useState, useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import CardsContext from '../context/CardsContext';
import NavBar from '../components/NavBar';
import MenuBar from '../components/MenuBar';
import Cards from '../components/Cards';
import ButtonAddCard from '../components/ButtonAddCard';

import AddCardModal from '../modal/AddCardModal';

import Footer from '../components/Footer';
import { Box, Container, Heading, Icon, useDisclosure } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const close = <FontAwesomeIcon icon={faTimesCircle} />;

function Payment() {
  const { url } = useRouteMatch();
  // const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState(null);
  const [cardType, setCardType] = useState(null);

  const { addCard, cards } = useContext(CardsContext);

  const addNewCard = (e) => {
    e.preventDefault();
    try {
      if (!cardType) {
        setError('Please enter a card Type.');
      }

      if (cardType) {
        addCard.push({
          type: cardType,
          cardEnding: '4958',
          valiTo: '08/22',
          id: Cards.length + 1,
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
          <MenuBar />
          <Icon fontSize="md" fontWeight="lg" mr="auto" ml="60px" mt="30px" color="#E5E8ED">
            {close}
          </Icon>
          <Heading as="h3" size="md" mb="10px" color="#BBBBC0" textAlign="center">
            FINANCES
          </Heading>
          <NavBar />
          {cards &&
            cards.map((card) => (
              <Cards key={card.id} type={card.type} goToUrl={`${url}/payment`} />
            ))}
          <ButtonAddCard onClick={onOpen}></ButtonAddCard>
          <Footer />
          <AddCardModal
            isOpen={isOpen}
            onClose={() => {
              onClose();
              setError(null);
            }}
            setCardType={setCardType}
            addCard={addNewCard}
            error={error}
          />
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default Payment;
