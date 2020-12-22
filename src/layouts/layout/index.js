import React from 'react'
import { Header } from 'layouts'
import { LayoutDiv, MainContainer } from './styles'

export default function Layout({ children, logoutHandler }) {
  return (
    <LayoutDiv>
      <Header logoutHandler={logoutHandler} />
      <MainContainer>{children}</MainContainer>
    </LayoutDiv>
  )
}
