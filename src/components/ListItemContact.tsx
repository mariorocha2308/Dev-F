import { Avatar, Text, ListItem, Box } from "@chakra-ui/react";

interface IPropsItem {
  id?: number,
  colorTitle?: string,
  name: string,
  lastMessage?: string,
  children?: JSX.Element,
  focusConversation?: () => void
}

const ListItemContact = (props: IPropsItem) => {

  return (
    <ListItem display='flex' justifyContent='space-between' alignItems='center' onClick={props.focusConversation} cursor='pointer'>
      <Box display='flex' gap='3' alignItems='center'>
        <Avatar name={props.name}/>
        <Box>
          <Text fontWeight='medium' color={props.colorTitle}>{props.name}</Text>
          <Text fontWeight='medium' color='whiteAlpha.700' fontSize='13.5' width='220px' textOverflow='ellipsis' whiteSpace='nowrap' overflow='hidden'>{props.lastMessage ?? 'Ready, write it!'}</Text>
        </Box>
      </Box>
      {props.children}
    </ListItem>
  );
}

export default ListItemContact;