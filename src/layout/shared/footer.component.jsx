import { Box, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import backgroundFooter from '../../assets/images/bg-footer.png'
import { Container } from './container.component'
import { ContactMedia } from '../../modules/components/contactMedia.component'

export const Footer = () => {
  return (
    <Box
      backgroundImage={backgroundFooter}
      backgroundPosition="50%"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      padding="50px 0"
    >
      <Container>
        <Flex direction="column" alignItems="end" gap="20px">
          <Flex gap="10px">
            <ContactMedia
              to="https://www.linkedin.com/in/eduarchilon"
              isIcon={true}
              icon="linkedin"
              size="20px"
            />
            <ContactMedia
              to="https://drive.google.com/file/d/1YsnJEwXwOEbVtczG988BQ0YswL7RkJ3l/view?usp=sharing"
              isIcon={false}
              text="CV"
            />
          </Flex>
          <Text color="whiteAlpha.600">
            Made by Eduar Chilon Cruz | based on template of{' '}
            <Link
              color="blue"
              href="https://github.com/od1na/personal-website?ref=reactjsexample.com"
              target="_blank"
            >
              od1na
            </Link>
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}
