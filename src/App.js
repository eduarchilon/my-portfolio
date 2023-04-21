import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './App.css'
import { Layout } from './layout/layout.component'
import { Home } from './sections/home.component'
import { Contact } from './sections/contact.component'
import { Skills } from './sections/skills.components'
import { Project } from './sections/projects.component'
import { breakpoints } from './utils/breakpoints'
import { useEffect, useState } from 'react'
import { Breakpoints } from './modules/enums/breakpoint.enum.ts'

function App() {
  const [perViewCountProject, setPerviewCountProject] = useState(3)
  const [perViewCountSkill, setPerviewCountSkill] = useState(6)

  const theme = extendTheme({ breakpoints })

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth <= Breakpoints.Mobile) {
        setPerviewCountProject(1)
        setPerviewCountSkill(2)
      } else if (window.innerWidth <= Breakpoints.Tablet) {
        setPerviewCountProject(2)
        setPerviewCountSkill(4)
      } else if (window.innerWidth <= Breakpoints.Desktop) {
        setPerviewCountSkill(5)
      } else {
        setPerviewCountProject(3)
        setPerviewCountSkill(6)
      }
    }
  }, [])
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Home />
        <Skills perViewCountSkill={perViewCountSkill} />
        <Project perViewCountProject={perViewCountProject} />
        <Contact />
      </Layout>
    </ChakraProvider>
  )
}

export default App
