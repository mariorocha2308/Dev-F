import { Box, Text } from '@chakra-ui/react';

const Logo = () => {

  return (  
    <Box display='flex' justifyContent='center' alignItems='center' width='35px' height='35px' backgroundColor='cyan' borderRadius='lg'>
      <Text fontWeight='black' color='blackAlpha.800' fontSize='18'>SG</Text>
    </Box>
  );
}

export default Logo;