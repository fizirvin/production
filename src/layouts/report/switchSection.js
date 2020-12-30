import React from 'react'
import { ButtonsDiv } from './styles'

export default function SwitchSection({ onClick }) {
  const buttons = [
    { key: 1, name: 'downtime', title: 'Downtime', onClick },
    { key: 2, name: 'defects', title: 'Defects', onClick },
    { key: 3, name: 'purge', title: 'Purge', onClick }
  ]

  const renderButtons = (items) => {
    return items.map((item) => (
      <button type="button" {...item}>
        {item.title}
      </button>
    ))
  }

  return <ButtonsDiv>{renderButtons(buttons)}</ButtonsDiv>
}
