import { Box, Flex, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Container } from './container.component'
import { Icon } from '../../modules/common/components/icon.component'
import { LinkButton } from '../../modules/components/linkButton.component'
import { ContactMedia } from '../../modules/components/contactMedia.component'

export const Header = ({ ...rest }) => {
  const [activeLink, setActiveLink] = useState('#home')
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  const handleMenuToogle = () => {
    openMenu === false ? setOpenMenu(true) : setOpenMenu(false)
  }

  const heightHeader = 50

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > heightHeader) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <BrowserRouter>
      <Box
        bg={scrolled ? 'black' : { sm: 'black', lg: 'transparent' }}
        {...rest}
        position="fixed"
        w="100%"
        zIndex="1111"
      >
        <Container>
          <Flex
            flexDirection={{ sm: 'column', lg: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            paddingY="20px"
            gap={{ sm: '20px', lg: '0' }}
          >
            <Flex
              width={{ sm: '100%', lg: 'fit-content' }}
              justifyContent={{ sm: 'space-between' }}
            >
              <Box>
                <Link
                  borderRadius="full"
                  background="yellow"
                  fontWeight="bold"
                  _hover={{ border: 'none' }}
                  href="#home"
                  color="black"
                  fontSize="25px"
                  padding="8px 25px"
                  onClick={() => onUpdateActiveLink('#home')}
                >
                  Eduar Chilon
                </Link>
              </Box>
              <Box
                display={{ sm: 'block', lg: 'none' }}
                _hover={{
                  transform: 'scale(1.2)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <Icon
                  icon="menu-2"
                  size="30px"
                  color="white"
                  cursor="pointer"
                  onClick={handleMenuToogle}
                ></Icon>
              </Box>
            </Flex>
            <Flex
              display={{ sm: `${openMenu ? 'flex' : 'none'}`, lg: 'flex' }}
              gap={'30px'}
              transition="ease-in-out 0.2s"
              direction={{ sm: 'column', lg: 'row' }}
              alignSelf={{ sm: 'baseline', lg: 'auto' }}
              alignItems={{ sm: 'baseline', lg: 'center' }}
            >
              <Flex
                gap={{ sm: '5px', lg: '30px' }}
                direction={{ sm: 'column', lg: 'row' }}
              >
                <Link
                  fontWeight="semibold"
                  _hover={{ border: 'none', color: 'white' }}
                  href="#home"
                  color={
                    activeLink === '#home' || activeLink === ''
                      ? 'white'
                      : 'whiteAlpha.700'
                  }
                  onClick={() => onUpdateActiveLink('#home')}
                >
                  Home
                </Link>
                <Link
                  fontWeight="semibold"
                  _hover={{ border: 'none', color: 'white' }}
                  href="#skills"
                  color={activeLink === '#skills' ? 'white' : 'whiteAlpha.700'}
                  onClick={() => onUpdateActiveLink('#skills')}
                >
                  Skills
                </Link>
                <Link
                  fontWeight="semibold"
                  _hover={{ border: 'none', color: 'white' }}
                  href="#projects"
                  color={
                    activeLink === '#projects' ? 'white' : 'whiteAlpha.700'
                  }
                  onClick={() => onUpdateActiveLink('#projects')}
                >
                  Projects
                </Link>
              </Flex>
              <Flex alignItems="center" gap="20px">
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
                <LinkButton
                  to="#connect"
                  text="Let's Connect"
                  onClick={() => onUpdateActiveLink('#connect')}
                />
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </BrowserRouter>
  )
}
