import React from 'react'
import ReactDOM from 'react-dom'

export default function PortalComponent({ children }) {
  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.querySelector('#modal')
  )
}
