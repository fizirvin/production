import React, { useState } from 'react'
import styled from '@emotion/styled'

const IconDiv = styled.div`
  color: #eee;
  font-size: 4erm;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1500;
  display: none;

  @media (max-width: 850px) {
    display: block;
  }
`

export default function Icon() {
  const [open, setOpen] = useState(true)
  return (
    <IconDiv>
      {open ? (
        <i onClick={() => setOpen(false)}>M</i>
      ) : (
        <i onClick={() => setOpen(true)}>X</i>
      )}
    </IconDiv>
  )
}
