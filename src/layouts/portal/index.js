import React from 'react'
import ReactDOM from 'react-dom'
import { Modal, Content } from 'components'

export default function PortalComponent({ children }) {
  return ReactDOM.createPortal(
    <Modal>
      <Content>{children}</Content>
    </Modal>,
    document.querySelector('#modal')
  )
}
