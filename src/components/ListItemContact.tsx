import { Avatar, Text, Box, AvatarBadge } from "@chakra-ui/react";

interface IPropsItem {
  id?: number,
  colorTitle?: string,
  name: string,
  image: string
  lastMessage?: string,
  mediaDisplay?: string[]
  mediaPadding?: string,
  children?: JSX.Element,
  focusConversation?: () => void
}

const ListItemContact = (props: IPropsItem) => {

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' onClick={props.focusConversation} cursor='pointer' marginLeft='1rem'>
      <Box display='flex' alignItems='center' gap={['0rem', '0rem', '0rem', '1rem']}>
        <Avatar src={props.image} size={['md', 'md', 'md', 'sm']}>
          <AvatarBadge boxSize='1rem' bg='green.500' />
        </Avatar>
        <Box>
          <Text fontWeight='medium' color={props.colorTitle} width='150px' textOverflow='ellipsis' whiteSpace='nowrap' overflow='hidden' display={props.mediaDisplay}>{props.name}</Text>
          <Text fontWeight='medium' color='whiteAlpha.700' fontSize='13.5' width='150px' textOverflow='ellipsis' whiteSpace='nowrap' overflow='hidden' display={props.mediaDisplay}>{props.lastMessage ?? 'Send message!!'}</Text>
        </Box>
      </Box>
      {props.children}
    </Box>
  );
}

export default ListItemContact;