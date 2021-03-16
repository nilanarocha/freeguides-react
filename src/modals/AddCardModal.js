import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Alert,
  AlertDescription,
  Select,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const AddCardModal = ({ isOpen, onClose, error, addNewCard, type }) => {
  const [cardType, setCardType] = useState(null);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" autoComplete="off" onSubmit={(e) => addNewCard(e, { cardType })}>
        <ModalHeader color="blue.500">Add Card</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {error && (
            <Alert status="error" mb={2} borderRadius="lg">
              <AlertDescription color="red.500">{error}</AlertDescription>
            </Alert>
          )}
          <FormControl id="type">
            <FormLabel>Card Type</FormLabel>
            <Input type="text" onChange={(e) => setCardType(e.target.value)} />
          </FormControl>
          <Select placeholder="Cards" id="type" onChange={(e) => setCardType(e.target.value)}>
            <option value={type}>VisaPlatinum</option>
            <option value={type}>Mastercard</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" type="submit">
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddCardModal;
