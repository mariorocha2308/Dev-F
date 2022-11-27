import { Box, Text } from '@chakra-ui/react';

interface IpropsTag {
  subtitle: string,
  children: JSX.Element
}

const TagEmpty = (props: IpropsTag) => {

  return (  
    <Box display='flex' flexDirection='column' color='whiteAlpha.700' alignItems='center' marginTop='20rem'>
      {props.children}
      <Text fontWeight='semibold' marginTop='2'>{props.subtitle}</Text>
    </Box>
  );
}

export default TagEmpty;