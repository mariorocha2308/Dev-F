import { useState, useEffect } from 'react'
import { Box, IconButton, List, Text } from "@chakra-ui/react";
import { RiSendPlaneFill } from 'react-icons/ri'
import { useStoreChat } from '../zustand/useStoreChat';
import { useStoreConversation } from '../zustand/useStoreConversation';
import Contacts from './Modals/Contacts';
import ListItemContact from './ListItemContact';

const SideChat = () => {

  const { chats, refresh } = useStoreChat()
  const { setConversation } = useStoreConversation()
  const [visible, setVisible] = useState<boolean>(false)

  const onHandleOpen = () => setVisible(true)
  const onHandleClose = () => setVisible(false)

  useEffect(() => {
  }, [refresh]);

  return (  
    <Box display='flex' width='25%' fontSize='15px' position='relative' flexDirection='column' minWidth='90px'>
      <Text color='whiteAlpha.900' fontWeight='medium' paddingLeft='5' display={['none', 'block', 'block', 'block']}>Recents</Text>
      <IconButton
        position='absolute'
        bottom='10'
        right='10'
        variant='ghost'
        colorScheme='cyan'
        aria-label='Send email'
        onClick={onHandleOpen}
        icon={<RiSendPlaneFill fontSize='25'/>}
      />
      <List spacing='3' marginTop='5'>
        {chats?.map((chat: any) => (
          <ListItemContact name={chat.name} lastMessage={chat?.messages[chat?.messages?.length - 1]?.data} colorTitle='cyan' focusConversation={() => setConversation(chat)} key={chat.id} mediaDisplay={['none', 'none', 'none', 'block']} mediaPadding='5'/>
        ))}
      </List>
      <Contacts isOpen={visible} onClose={onHandleClose}/>
    </Box>
  );
}

export default SideChat;