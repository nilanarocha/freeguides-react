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

const AddCardModal = ({ isOpen, onClose, setUsername, addUser, error }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={(e) => addUser(e)}>
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
          <FormControl id="number">
            <FormLabel>Add Card Ending</FormLabel>
            <Input type="text" onChange={(e) => setCardType(e.target.value)} />
          </FormControl>
          setCardType={setCardType}
          addCardEnding={addCardEnding}
          addValidTo={addValidTo}
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
