import React from 'react'
import { Icon } from '../common/components/icon.component'
import { Link, Text } from '@chakra-ui/react'

export const ContactMedia = ({ isIcon = false, text, to, ...rest }) => {
  return (
    <Link
      border="1px solid white"
      borderRadius="full"
      href={to}
      width="45px"
      height="45px"
      color="white"
      _hover={{
        textDecoration: 'none',
        color: 'black',
        backgroundColor: 'white',
      }}
      target="_blank"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {isIcon ? <Icon {...rest} /> : <Text fontWeight="bold">{text}</Text>}
    </Link>
  )
}
