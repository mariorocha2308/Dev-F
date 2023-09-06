import { useState, useEffect } from 'react'
import { Box, IconButton, Stack, Text } from "@chakra-ui/react";
import { RiSendPlaneFill } from 'react-icons/ri'
import { useStoreChat } from '../zustand/useStoreChat';
import { useStoreConversation } from '../zustand/useStoreConversation';
import Contacts from './Modals/Contacts';
import ListItemContact from './ListItemContact';
import Logo from './Logo';

const SideChat = () => {

  const { chats, refresh } = useStoreChat()
  const { setConversation } = useStoreConversation()
  const [visible, setVisible] = useState<boolean>(false)

  const onHandleOpen = () => setVisible(true)
  const onHandleClose = () => setVisible(false)

  useEffect(() => {
  }, [refresh]);

  return (  
    <Box display='flex' width={['100%', '100%', '100%', '20%']} fontSize='15px' position='relative' flexDirection='column' minWidth='90px' height={['25vh', '25vh', '25vh', '100vh']}>
      <Box display='flex' alignItems='center' p='1rem' justifyContent='space-between'>
        <Box display='flex' alignItems='center' gap='1rem'>
          <Logo/>
          <Text color='whiteAlpha.900' fontWeight='medium'>Recents</Text>
        </Box>
        <IconButton
          size='sm'
          variant='ghost'
          colorScheme='cyan'
          aria-label='Send message'
          onClick={onHandleOpen}
          icon={<RiSendPlaneFill fontSize='20px'/>}
        />
      </Box>
      <Box display='flex' marginTop='1rem' flexDirection={['row', 'row', 'row', 'column']} gap='1rem'>
        {chats?.map((chat: any) => (
          <ListItemContact name={chat.name} lastMessage={chat?.messages[chat?.messages?.length - 1]?.data} colorTitle='whiteAlpha.900' image={chat.image} focusConversation={() => setConversation(chat)} key={chat.id} mediaDisplay={['none', 'none', 'none', 'block']} />
        ))}
      </Box>
      <Contacts isOpen={visible} onClose={onHandleClose}/>
    </Box>
  );
}

export default SideChat;