import { Link } from '@chakra-ui/react'
import React from 'react'

export const LinkButton = ({ to, text, ...rest }) => {
  return (
    <Link
      href={to}
      fontWeight="extrabold"
      paddingX="25px"
      paddingY="15px"
      border="2px solid white"
      color="white"
      _hover={{
        textDecoration: 'none',
        backgroundColor: 'white',
        color: 'black',
      }}
      {...rest}
    >
      {text}
    </Link>
  )
}
