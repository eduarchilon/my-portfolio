import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Container } from '../layout/shared/container.component'
import { projectsData } from '../data/projects'
import { ModalCustomBody } from '../modules/components/modalCustomBody.component'
import { useState } from 'react'

export const Project = ({ perViewCountProject }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [projectSelected, setProjectSeleted] = useState({})
  const handleOpen = (idProject) => {
    const projectResult = projectsData.find((item) => item.id === idProject)
    setProjectSeleted({ ...projectResult })
    onOpen()
  }

  return (
    <Box
      background="black"
      id="projects"
      padding="100px 0px 100px 0px"
      color="white"
      textAlign="center"
    >
      <Container>
        <Text marginBottom="40px" fontWeight="bold" fontSize="50px">
          Projects
        </Text>
        <Flex width="100%" justifyContent="center" alignItems="center">
          <Swiper
            slidesPerView={perViewCountProject}
            loop={true}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {projectsData.map((project) => (
              <SwiperSlide
                key={project?.id}
                style={{
                  minHeight: '200px',

                  minWidth: `${
                    perViewCountProject === 3
                      ? '400px'
                      : perViewCountProject === 2
                      ? '200px'
                      : '200px'
                  }`,
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={() => handleOpen(project?.id)}
              >
                <Flex
                  borderRadius="30px"
                  position="relative"
                  _before={{
                    content: '""',
                    background:
                      'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
                    opacity: '0.85',
                    position: 'absolute',
                    width: '100%',
                    height: '0',
                    left: '0',
                    right: '50',
                    transition: '0.3s ease-in-out',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    borderRadius: '20px',
                  }}
                  _hover={{
                    _before: {
                      content: `"${project?.name}"`,
                      height: '100%',
                    },
                  }}
                >
                  <Image
                    borderRadius="20px"
                    src={project?.image}
                    alt={project?.name}
                  />
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
        <Modal
          style={{ zIndex: '9999' }}
          size="full"
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent
            style={{
              color: 'white',
              background: 'black',
              position: 'fixed',
              overflowY: 'scroll',
            }}
          >
            <Container height="100vh" display="flex" flexDirection="column">
              <Flex
                width="100%"
                alignItems="center"
                justifyContent="space-between"
              >
                <ModalHeader fontSize="30px" flex="1">
                  {projectSelected?.name}
                </ModalHeader>
                <CloseButton onClick={onClose} />
              </Flex>
              <ModalCustomBody project={projectSelected} />
              <ModalFooter>
                <Button
                  style={{
                    background: 'red',
                  }}
                  colorScheme="white"
                  mr={3}
                  onClick={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </Container>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  )
}
