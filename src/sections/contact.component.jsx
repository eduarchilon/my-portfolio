import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import * as Yup from 'yup'
import React, { useState } from 'react'
import contactImage from '../assets/images/contact-image.png'
import { Container } from '../layout/shared/container.component'
import { useFormik } from 'formik'
import { EventButton } from '../modules/components/eventButton.component'

export const Contact = () => {
  const toast = useToast()
  const [buttonText, setButtonText] = useState('Send')

  const signupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email'),
  })

  const handleSubmit = async (e, { resetForm }) => {
    // e.preventDefault()
    setButtonText('Sending...')
    try {
      const rawResponse = await fetch(
        `https://api-nodemailer-ech.vercel.app/email?email=${process.env.REACT_APP_EMAIL}&apppass=${process.env.REACT_APP_APPPASS}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: e.name,
            email: e.email,
            subject: e.subject,
            html: e.message,
          }),
        },
      )
      const content = await rawResponse.json()
      if (content?.message === 'EMAIL_SENDED') {
        setButtonText('Send')
        resetForm()
        toast({
          title: 'Message sent successfully!',
          description: 'Thank you for sending the message.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    } catch (error) {
      setButtonText('Send')
      toast({
        title: 'Message was not sent!',
        description: 'Please try again later.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      subject: '',
      message: '',
    },
    onSubmit: handleSubmit,
    validationSchema: signupSchema,
  })

  return (
    <Box
      id="connect"
      paddingY="50px"
      background="linear-gradient(90.21deg, #62063d -5.91%, #0c0236 111.58%)"
    >
      <Container>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap={{ sm: '5%', lg: '15%' }}
          flexDirection={{ sm: 'column-reverse', lg: 'row' }}
        >
          <Box
            display={{ sm: 'none', lg: 'block' }}
            width={{ sm: '100%', lg: '40%' }}
          >
            <Image
              boxSize="100%"
              src={contactImage}
              alt="Eduar Chilon contact image"
            />
          </Box>
          <Box width={{ sm: '100%', lg: '60%' }} color="white">
            <Text fontWeight="bold" fontSize="50px">
              Get In Touch
            </Text>
            <form onSubmit={formik.handleSubmit}>
              <Flex gap="20px" marginBottom="20px">
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    placeholder="Your name"
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Your email address"
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </Flex>
              <FormControl isRequired marginBottom="20px">
                <FormLabel>Subject</FormLabel>
                <Input
                  placeholder="Subject message"
                  type="text"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                />
              </FormControl>
              <FormControl isRequired marginBottom="40px">
                <FormLabel>Message</FormLabel>
                <Textarea
                  height="200px"
                  placeholder="Your message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
              </FormControl>
              <EventButton type="submit" text={buttonText} />
            </form>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
