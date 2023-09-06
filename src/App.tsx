import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import './App.css'

import SideChat from './components/SideChat'
import SideConversation from './components/SideConversation'

import { getContactsQuery } from './utils/api/contacts'
import { useStoreContacts } from './zustand/useStoreContacts'

function App() {

  const { setContacts } = useStoreContacts()

  useEffect(() => {
    getContactsQuery()
    .then((result: any) => {
      setContacts(result)
    })
  }, []);

  return (
    <Box className='app'>
      <Box className='responsive-width' display={['column','column', 'column', 'flex']} height='90vh'>
        <SideChat/>
        <SideConversation/>
      </Box>
    </Box>
  )
}

export default App
