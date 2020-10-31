import React from 'react'
import Controls from './controls'

export default function FormComponent({ title, onSubmit, to, children }) {
  return (
    <form onSubmit={onSubmit}>
      <h2>{title}</h2>
      <table>
        <tbody>{children}</tbody>
      </table>
      <Controls to={to} />
    </form>
  )
}
