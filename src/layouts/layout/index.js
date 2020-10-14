import React from 'react'
import { Header } from 'layouts'
import { LayoutDiv, MainContainer } from './styles'

export default function Layout({ children }) {
  return (
    <LayoutDiv>
      <Header />
      <MainContainer>{children}</MainContainer>
    </LayoutDiv>
  )
}
