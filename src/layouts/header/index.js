import React from 'react'
import { ContainerDiv, HeaderContainer, NavContainer } from './styles'
import { Icon, Logo, Nav } from 'layouts'

export default function Header() {
  return (
    <HeaderContainer>
      <ContainerDiv>
        <NavContainer>
          <Logo />
          <Icon />
          <Nav />
        </NavContainer>
      </ContainerDiv>
    </HeaderContainer>
  )
}
