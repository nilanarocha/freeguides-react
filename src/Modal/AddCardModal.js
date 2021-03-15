import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertDescription,
} from '@chakra-ui/react';

const AddCardModal = ({ isOpen, onClose, error, setCardType, addNewCard }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={(e) => addNewCard(e)}>
        <ModalHeader color="blue.500">Add Card</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {error && (
            <Alert status="error" mb={2} borderRadius="lg">
              <AlertDescription color="red.500">{error}</AlertDescription>
            </Alert>
          )}
          <FormControl id="cardType">
            <FormLabel>Card Type</FormLabel>
            <Input type="text" onChange={(e) => setCardType(e.target.value)} />
          </FormControl>
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
