import { Box, Flex, Image, Select, Text } from '@chakra-ui/react'
import { Container } from '../layout/shared/container.component'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { skillsData } from '../data/skills'
import { useState } from 'react'

export const Skills = ({ perViewCountSkill }) => {
  const [skillItem, setSkillItem] = useState({ ...skillsData[0] })
  const handleChange = (e) => {
    let skillFinded = skillsData?.find(
      (item) => item?.id === Number(e?.target?.value),
    )
    setSkillItem(skillFinded)
  }

  return (
    <Box
      id="skills"
      paddingY="50px"
      background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(83,9,121,1) 35%, rgba(0,0,0,1) 100%)"
      color="white"
      textAlign="center"
      height="500px"
    >
      <Container position="relative">
        <Box
          position="absolute"
          background="#151515"
          width={{ sm: '90%', lg: 'auto' }}
          padding={{ sm: '100px 20px 100px 20px', lg: '100px 50px 100px 50px' }}
          top="-100"
          left={{ sm: '5', lg: '50' }}
          right={{ sm: '5', lg: '50' }}
          borderRadius="65px"
        >
          <Flex
            marginBottom={{ sm: '40px', lg: '60px' }}
            paddingX="5%"
            flexDirection={{ sm: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            gap={{ sm: '30px', md: '0' }}
          >
            <Text as="h1" width="fit-content" fontWeight="bold" fontSize="50px">
              About Skills
            </Text>
            <Select onChange={handleChange} width="fit-content">
              {skillsData.map((item) => (
                <option value={item?.id} key={item.id}>
                  {item?.name}
                </option>
              ))}
            </Select>
          </Flex>
          <Flex
            width="100%"
            paddingX="5%"
            justifyContent="center"
            alignItems="center"
          >
            <Swiper
              slidesPerView={perViewCountSkill}
              navigation={true}
              loop={true}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {skillItem?.data.map((skill) => (
                <SwiperSlide
                  key={skill.id}
                  style={{
                    maxWidth: '160px',
                    maxHeight: '130px',
                    minWidth: '160px',
                    height: '130px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    width="50%"
                    height="60%"
                    src={skill?.image}
                    alt={skill?.name}
                  />
                  <Text marginTop="20px" textAlign="center" color="white">
                    {skill?.name}
                  </Text>
                </SwiperSlide>
              ))}
            </Swiper>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
