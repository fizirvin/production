import React from 'react'

export default function FormComponent({ title, onSubmit, children }) {
  return (
    <form onSubmit={onSubmit}>
      <h2>{title}</h2>
      <table>
        <tbody>{children}</tbody>
      </table>
    </form>
  )
}
