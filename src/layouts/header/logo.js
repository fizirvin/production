import React from 'react'
import styled from '@emotion/styled'
import logo from 'icons/server.png'

const LogoDiv = styled.a`
  width: 5rem;
  height: 5rem;
  display: flex;
  margin-right: 5rem;

  img {
    margin: auto;
    width: 3rem;
    height: 3rem;
  }
`

export default function Logo() {
  return (
    <LogoDiv>
      <img src={logo} alt={'database'}></img>
    </LogoDiv>
  )
}
