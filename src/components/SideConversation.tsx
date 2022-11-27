import { useState } from 'react'
import { Box, Text, Input, IconButton, Avatar } from "@chakra-ui/react";
import { RiChatSmile3Fill, RiSendPlaneFill } from "react-icons/ri";
import { useStoreConversation } from '../zustand/useStoreConversation';
import { useStoreChat } from '../zustand/useStoreChat';
import moment from 'moment';
import TagEmpty from "./TagEmpty";

const SideConversation = () => {

  const { conversation } = useStoreConversation()
  const { addMessages, setRefresh } = useStoreChat()
  const [message, setMessage] = useState({
    data: '',
    time: ''
  })

  const onTextMessage = (e: any) => {
    const time = moment().format('LT')
    setMessage({...message, [e.target.name]: e.target.value, time})
  }

  const onSubmit = (id: number) => {
    addMessages(message, id)
    setMessage({data: '', time: ''})
    setRefresh()
  }
  return (  
    <Box width='75%' backgroundColor='#1C1C1C' borderRadius='1rem' overflow='hidden'>
      {!conversation[0] && (
        <TagEmpty subtitle='Add contact to talk'>
          <RiChatSmile3Fill size='50'/>
        </TagEmpty>
      )}

      {conversation[0] && (
        <>
          <Box display='flex' color='white' padding='1rem' backgroundColor='yellow.600' height='8vh' boxSizing='border-box' alignItems='center' gap='3'>
            <Avatar name={conversation[0].name} size='md'/>
            <Text fontWeight='semibold'>{conversation[0]?.name}</Text>
          </Box>
          <Box display='flex' height='72vh' alignItems='flex-end' justifyContent='flex-end' flexDirection='column' gap='3' paddingX='5' paddingY='5'>
            {conversation[0].messages.map((message: any, idx: number) => (
              <Box display='flex' flexDirection='column' paddingLeft='2rem' backgroundColor='#424242' textAlign='end' paddingY='1' paddingRight='2' borderRadius='5px' key={idx}>
                <Text color='white' maxWidth='400px' textAlign='start'>{message.data}</Text>
                <Text color='whiteAlpha.600' fontSize='12' marginTop='1.5'>{message.time}</Text>
              </Box>
            ))}
          </Box>
          <Box display='flex' height='7vh' alignItems='center' marginX='2' backgroundColor='gray.700' borderRadius='10' paddingX='4'>
            <Input placeholder="White message..." variant='unstyled' color='white' onChange={onTextMessage} value={message.data || ''} name='data'/>
            <IconButton
              variant='ghost'
              colorScheme='cyan'
              aria-label='Send email'
              onClick={() => onSubmit(conversation[0].id)}
              icon={<RiSendPlaneFill fontSize='25'/>}
            />
          </Box>
        </>
      )}
    </Box>
  );
}

export default SideConversation;