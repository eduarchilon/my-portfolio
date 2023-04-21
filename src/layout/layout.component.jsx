import React from 'react'
import { Header } from './shared/header.component'
import { Footer } from './shared/footer.component'
import { useState } from 'react'

export const Layout = ({ children }) => {
  //PENSAR EN EL COMPONENTE CONTAINER PARA EL LAYOUTS
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
