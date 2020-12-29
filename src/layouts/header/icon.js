import React, { useEffect, useRef } from 'react'
import { Hamburguer } from 'components'
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

export default function Icon({ Open, isOpen, setMobile }) {
  const iconRef = useRef()
  useEffect(() => {
    const styles = getComputedStyle(iconRef.current)

    if (styles.display === 'none') {
      setMobile(false)
    }
    if (styles.display === 'block') {
      setMobile(true)
    }
  }, [setMobile])

  return (
    <IconDiv ref={iconRef}>
      {/* {isOpen ? (
        <i onClick={() => Open(false)}>X</i>
      ) : (
        <i onClick={() => Open(true)}>M</i>
      )} */}
      <i onClick={() => Open(!isOpen)}>
        <Hamburguer isOpen={isOpen} />
      </i>
    </IconDiv>
  )
}
