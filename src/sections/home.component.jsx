import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Container } from '../layout/shared/container.component'
import backgroundImage from '../assets/images/bg-home.jpeg'
import profileImage from '../assets/images/profile-image.svg'

export const Home = () => {
  const messages = ['Software Developer', 'Programming Student']
  const [messageIndex, setMessageIndex] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    let intervalId
    if (text !== messages[messageIndex]) {
      intervalId = setInterval(() => {
        setText((prevText) => {
          const nextChar = messages[messageIndex][prevText.length]
          return prevText + nextChar
        })
      }, 500)
    }
    const message = messages[messageIndex]
    if (text === message) {
      setTimeout(() => {
        setMessageIndex((messageIndex + 1) % messages.length)
        setText('')
      }, 5000)
    }
    return () => clearInterval(intervalId)
  }, [text, messageIndex])

  return (
    <Flex
      id="home"
      backgroundImage={backgroundImage}
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      paddingTop={{ sm: '100px', lg: '200px' }}
      paddingBottom="100px"
    >
      <Container>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap="5%"
          flexDirection={{ sm: 'column-reverse', lg: 'row' }}
        >
          <Box width={{ sm: '100%', lg: '65%' }} color="white">
            <Text
              backgroundColor="whiteAlpha.300"
              width="fit-content"
              padding="8px 15px"
              border="1px solid white"
              fontWeight="bold"
              fontSize="20px"
              marginBottom="20px"
            >
              Welcome to my Portfolio
            </Text>
            <Text lineHeight="60px" fontSize="60px" fontWeight="bold">
              Hi! I'm Eduar, {text}
              <Text
                as={'span'}
                fontWeight="light"
                fontSize="80px"
                color="whiteAlpha.700"
              >
                |
              </Text>
            </Text>
            <Text
              marginTop="20px"
              marginBottom="40px"
              fontSize="18px"
              color="whiteAlpha.800"
            >
              My full name is Eduar Chilon Cruz, I am an enthusiastic, committed
              and responsible person. My curiosity and the desire for continuous
              learning drive me to acquire new useful tools for my professional
              development. I seek to combine my academic training with my
              passion for new technologies in an organization that allows me to
              achieve my professional development.
            </Text>
            <Link
              href="#connect"
              _hover={{
                border: 'none',
              }}
              display="flex"
              alignItems="center"
              gap="10px"
              fontWeight="semibold"
            >
              <Text
                _hover={{
                  border: 'none',
                  textDecoration: 'underline',
                }}
              >
                Let's Connect
              </Text>
              <Text
                display="flex"
                justifyContent="center"
                width="25px"
                height="25px"
                border="1px solid white"
                borderRadius="full"
                alignItems="center"
              >
                ➔
              </Text>
            </Link>
          </Box>
          <Box width={{ sm: '50%', lg: '35%' }}>
            <Image
              boxSize="100%"
              src={profileImage}
              alt="Eduar Chilon profile image"
            />
          </Box>
        </Flex>
      </Container>
    </Flex>
  )
}
