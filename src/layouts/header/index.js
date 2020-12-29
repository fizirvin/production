import React, { useState } from 'react'
import { ContainerDiv, HeaderContainer, NavContainer } from './styles'
import { Icon, Logo, Nav } from 'layouts'

export default function Header({ logoutHandler }) {
  const [mobile, setMobile] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <HeaderContainer>
      <ContainerDiv>
        <NavContainer>
          <Logo />
          <Icon isOpen={open} Open={setOpen} setMobile={setMobile} />
          <Nav
            logoutHandler={logoutHandler}
            setOpen={setOpen}
            open={open}
            mobile={mobile}
          />
        </NavContainer>
      </ContainerDiv>
    </HeaderContainer>
  )
}
