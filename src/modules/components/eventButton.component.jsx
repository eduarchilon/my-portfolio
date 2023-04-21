import { Text } from '@chakra-ui/react'
import React from 'react'

export const EventButton = ({ text, type, ...rest }) => {
  return (
    <button type={type} {...rest}>
      <Text
        as="span"
        background="white"
        fontWeight="extrabold"
        padding="15px 40px"
        border="2px solid white"
        color="black"
        _hover={{
          backgroundColor: 'black',
          color: 'white',
          border: '2px solid black',
        }}
      >
        {text}
      </Text>
    </button>
  )
}
