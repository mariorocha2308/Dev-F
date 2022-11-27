import { Box, Text } from '@chakra-ui/react'
import Logo from './Logo';

const Header = () => {

  return ( 
    <Box display='flex' alignItems='center' paddingY='1.5rem' color='skyblue' fontWeight='bold' gap='3' height='10vh'>
      <Logo/>
      <Text>Senseigram</Text>
    </Box>
  );
}

export default Header;