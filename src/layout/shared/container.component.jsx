import { Box } from '@chakra-ui/react'
import React from 'react'

export const Container = ({ children, ...rest }) => {
  return (
    <Box maxW="1440px" m="auto" width="100%" paddingX={{ sm: '5vw' }} {...rest}>
      {children}
    </Box>
  )
}
