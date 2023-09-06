import { useState } from 'react'
import { Box, Text, Input, IconButton, Avatar } from "@chakra-ui/react";
import { RiChatSmile3Fill, RiSendPlaneFill, RiDeleteBin4Fill } from "react-icons/ri";
import { useStoreConversation } from '../zustand/useStoreConversation';
import { useStoreChat } from '../zustand/useStoreChat';
import moment from 'moment';
import TagEmpty from "./TagEmpty";

const SideConversation = () => {

  const { conversation, clearConversation } = useStoreConversation()
  const { addMessages, setRefresh, deleteChat } = useStoreChat()
  const [message, setMessage] = useState({
    data: '',
    time: ''
  })

  const onTextMessage = (e: any) => {
    const time = moment().format('LT')
    setMessage({...message, [e.target.name]: e.target.value, time})
  }

  const onSubmit = () => {
    addMessages(message, conversation[0].id)
    setMessage({data: '', time: ''})
    setRefresh()
  }

  const onHandleTrash = () => {
    deleteChat(conversation[0].id)
    clearConversation()
    setRefresh()
  }

  return (  
    <Box width={['100% ','100%', '100%', '80%']} backgroundColor='#202020' overflow='hidden' height='100vh'>
      {!conversation[0] && (
        <TagEmpty subtitle='Add contact to talk'>
          <RiChatSmile3Fill size='50'/>
        </TagEmpty>
      )}

      {conversation[0] && (
        <Box display='flex' justifyContent='space-between' flexDirection='column' height='100vh'>
          <Box display='flex' color='white' padding='2rem' backgroundColor='#303030' height='8vh' boxSizing='border-box' alignItems='center' gap='3'
            justifyContent='space-between'>
            <Box display='flex' alignItems='center' gap='1rem'>
              <Avatar name={conversation[0].name} size='sm' src={conversation[0].image}/>
              <Text fontWeight='semibold'>{conversation[0]?.name}</Text>
            </Box>
            <RiDeleteBin4Fill onClick={onHandleTrash} cursor='pointer' style={{marginLeft: '1rem'}} size='22'/>
          </Box>
          <Box display='flex' height='84vh' alignItems='flex-end' justifyContent='flex-end' flexDirection='column' gap='3' paddingX='5' paddingY='5'>
            {conversation[0].messages.map((message: any, idx: number) => (
              <Box display='flex' flexDirection='column' paddingLeft='2rem' backgroundColor='blue.500' textAlign='end' paddingY='1' paddingRight='2' borderRadius='5px' key={idx}>
                <Text color='whiteAlpha.900' maxWidth='400px' fontSize='14px' textAlign='start'>{message.data}</Text>
                <Text color='whiteAlpha.800' fontSize='12px' marginTop='1.5'>{message.time}</Text>
              </Box>
            ))}
          D</Box>
          <Box display='flex' height='8vh' alignItems='center' backgroundColor='#252525' paddingX='4'>
            <Input placeholder="Write message..." fontWeight='medium' color='whiteAlpha.900' fontSize='14px' variant='unstyled' onChange={onTextMessage} value={message.data || ''} name='data'/>
            <IconButton
              variant='ghost'
              colorScheme='cyan'
              aria-label='Send email'
              onClick={onSubmit}
              icon={<RiSendPlaneFill fontSize='25'/>}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default SideConversation;