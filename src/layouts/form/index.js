import React from 'react'

export default function FormComponent({ title, children, controls }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>{title}</h2>
      <table>
        <tbody>{children}</tbody>
      </table>
      {controls}
    </form>
  )
}
