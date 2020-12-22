import React from 'react'
import { ContainerDiv, HeaderContainer, NavContainer } from './styles'
import { Icon, Logo, Nav } from 'layouts'

export default function Header({ logoutHandler }) {
  return (
    <HeaderContainer>
      <ContainerDiv>
        <NavContainer>
          <Logo />
          <Icon />
          <Nav logoutHandler={logoutHandler} />
        </NavContainer>
      </ContainerDiv>
    </HeaderContainer>
  )
}
