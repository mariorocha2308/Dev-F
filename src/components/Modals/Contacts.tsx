import { Button, List, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { useStoreContacts } from '../../zustand/useStoreContacts';
import { useStoreChat } from '../../zustand/useStoreChat';
import ListItemContact from '../ListItemContact';

interface IPropsContact {
  isOpen: boolean,
  onClose: () => void
}

const Contacts = (props: IPropsContact) => {

  const { contacts } = useStoreContacts()
  const { chats } = useStoreChat()
  const { setChats } = useStoreChat()

  const onHandleSend = (data: any) => {
    setChats(data)
    props.onClose()
  } 

  return (  
    <Modal isOpen={props.isOpen} onClose={props.onClose} scrollBehavior='inside' size='lg'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Contacts</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List spacing='3'>
            {contacts?.map((contact: any) => (
              <ListItemContact name={contact.name} id={contact.id} key={contact.id}>
                <Button colorScheme='gray' onClick={() => onHandleSend(contact)} 
                disabled={chats.some((chat: any) => chat.id === contact.id)}>Send message</Button>
              </ListItemContact>
            ))}
          </List>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' onClick={props.onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Contacts;