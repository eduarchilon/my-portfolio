import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  ModalBody,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Icon } from '../common/components/icon.component'

export const ModalCustomBody = ({ project }) => {
  return (
    <ModalBody>
      <Flex
        flexDirection={{ sm: 'column', lg: 'row' }}
        justifyContent="space-between"
        gap="50px"
        marginY="40px"
      >
        <Box width={{ sm: '100%', lg: '50%' }}>
          <Image
            border="1px solid grey"
            borderRadius="30px"
            objectFit="cover"
            width="100%"
            height="400px"
            src={project?.image}
          ></Image>
        </Box>
        <Flex
          flexDirection="column"
          gap="30px"
          width={{ sm: '100%', lg: '50%' }}
        >
          <Text>{project?.desc}</Text>
          <Flex gap="20px">
            {project?.tecnologies.map((tecnology) => (
              <Button colorScheme={tecnology?.color} key={tecnology?.id}>
                {tecnology?.name}
              </Button>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex gap="30px">
        <Button
          _hover={{ background: 'grey' }}
          colorScheme="white"
          border="1px solid white"
        >
          <Link
            display="flex"
            gap="10px"
            alignItems="center"
            _hover={{ border: 'none' }}
            href={project?.linkRepository}
            target="_blank"
          >
            Github
            <Icon icon="github" size="30px" color="white" cursor="pointer" />
          </Link>
        </Button>
        <Button
          _hover={{ background: 'grey' }}
          colorScheme="white"
          border="1px solid white"
        >
          <Link
            display="flex"
            gap="10px"
            alignItems="center"
            _hover={{ border: 'none' }}
            href={project?.linkDeploy}
            target="_blank"
          >
            Link
            <Icon icon="link" size="30px" color="white" cursor="pointer" />
          </Link>
        </Button>
      </Flex>
    </ModalBody>
  )
}
